import { useState } from "react";
import { X, Mail, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmailCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: 'ios' | 'android';
}

export default function EmailCollectionModal({ isOpen, onClose, platform }: EmailCollectionModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('https://dev.nookly.app/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          platform: platform,
          source: 'download_button'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setEmail("");
        }, 2000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const platformName = platform === 'ios' ? 'iOS' : 'Android';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-nookly-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-nookly-blue mb-2">
                Get Early Access to Nookly
              </h3>
              <p className="text-gray-600">
                Be the first to experience the future of dating on {platformName}!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nookly-blue focus:border-transparent text-gray-900 placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className="w-full bg-nookly-gradient hover:opacity-90 text-white py-3 rounded-lg font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Get Early Access'}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We'll notify you when Nookly launches and you'll get priority access!
            </p>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600">
              You're on the list! We'll notify you when Nookly launches on {platformName}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
