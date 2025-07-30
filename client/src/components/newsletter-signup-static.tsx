import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterSignupStatic() {
  const { toast } = useToast();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    // Store email in localStorage for now (basic tracking)
    const existingEmails = JSON.parse(localStorage.getItem('nookly-newsletter') || '[]');
    
    if (existingEmails.includes(data.email)) {
      toast({
        title: "Already subscribed",
        description: "You're already subscribed to our newsletter!",
        variant: "destructive",
      });
      return;
    }
    
    existingEmails.push(data.email);
    localStorage.setItem('nookly-newsletter', JSON.stringify(existingEmails));
    
    toast({
      title: "Welcome to Nookly!",
      description: "You've successfully subscribed to our newsletter.",
    });
    
    form.reset();
    
    // Optional: Send to external service like Mailchimp, ConvertKit, etc.
    // You can integrate with services that accept API calls from client-side
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
      <p className="text-blue-100 mb-4">Get the latest updates about Nookly features and dating tips.</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="bg-nookly-coral hover:bg-nookly-coral/90 text-white"
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
}