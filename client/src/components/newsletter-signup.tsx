import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterSignup() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const submitNewsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      return apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to Nookly!",
        description: "You've successfully subscribed to our newsletter.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: (error: any) => {
      const message = error.message?.includes("already subscribed") 
        ? "You're already subscribed to our newsletter!" 
        : "Failed to subscribe. Please try again.";
      
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    submitNewsletterMutation.mutate(data);
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
            disabled={submitNewsletterMutation.isPending}
          >
            {submitNewsletterMutation.isPending ? "..." : "Subscribe"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
