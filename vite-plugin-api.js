import fs from 'fs';
import path from 'path';

export function apiPlugin() {
  return {
    name: 'api-plugin',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res, next) => {
        // Handle early access API
        if (req.url === '/early-access' && req.method === 'POST') {
          try {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            
            req.on('end', async () => {
              try {
                const data = JSON.parse(body);
                const result = await handleEarlyAccess(data, req);
                
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                
                res.statusCode = result.status;
                res.end(JSON.stringify(result.data));
              } catch (error) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, message: 'Server error' }));
              }
            });
          } catch (error) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, message: 'Server error' }));
          }
        } else {
          next();
        }
      });
    }
  };
}

// Email handling logic
const dataDir = path.join(process.cwd(), 'data');
const csvPath = path.join(dataDir, 'early-access-emails.csv');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize CSV file with headers if it doesn't exist
if (!fs.existsSync(csvPath)) {
  fs.writeFileSync(csvPath, 'timestamp,email,platform,ip_address\n');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function emailExists(email) {
  try {
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const lines = csvContent.split('\n');
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const [timestamp, existingEmail] = lines[i].split(',');
        if (existingEmail && existingEmail.toLowerCase() === email.toLowerCase()) {
          return true;
        }
      }
    }
    return false;
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false;
  }
}

function appendEmailToCSV(email, platform, ipAddress) {
  try {
    const timestamp = new Date().toISOString();
    const csvLine = `${timestamp},${email},${platform},${ipAddress}\n`;
    
    fs.appendFileSync(csvPath, csvLine);
    console.log(`Email added to CSV: ${email}`);
  } catch (error) {
    console.error('Error writing to CSV:', error);
    throw error;
  }
}

async function handleEarlyAccess(data, req) {
  const { email, platform, source } = data;
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';

  // Validate input
  if (!email || !platform || !source) {
    return {
      status: 400,
      data: { success: false, message: 'Missing required fields: email, platform, source' }
    };
  }

  // Validate email format
  if (!isValidEmail(email)) {
    return {
      status: 400,
      data: { success: false, message: 'Please enter a valid email address' }
    };
  }

  // Check if email already exists
  if (emailExists(email)) {
    return {
      status: 409,
      data: { success: false, message: 'This email is already registered for early access' }
    };
  }

  // Validate platform
  if (!['ios', 'android'].includes(platform)) {
    return {
      status: 400,
      data: { success: false, message: 'Invalid platform. Must be ios or android' }
    };
  }

  // Append to CSV file
  appendEmailToCSV(email, platform, ipAddress);

  // Success response
  return {
    status: 200,
    data: { success: true, message: 'Thanks! We\'ll notify you when Nookly launches.' }
  };
}
