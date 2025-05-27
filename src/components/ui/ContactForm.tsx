
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  address: z.string().optional(),
  service: z.string({
    required_error: "Please select a service.",
  }),
  propertyType: z.string({
    required_error: "Please select a property type.",
  }),
  source: z.string({
    required_error: "Please tell us how you heard about us.",
  }),
  contactMethod: z.string({
    required_error: "Please select your preferred contact method.",
  }),
  message: z.string().optional(),
  preferredDate: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      propertyType: "",
      source: "",
      contactMethod: "phone",
      message: "",
      preferredDate: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", data);
      
      // Transform data to match database schema
      const dbData = {
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        service_type: data.service,
        property_type: data.propertyType,
        referral_source: data.source,
        preferred_contact: data.contactMethod,
        message: data.message,
        preferred_date: data.preferredDate,
      };

      // Save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([dbData]);

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save contact information");
      }

      // Send emails via Edge Function
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        console.error("Email function error:", error);
        // Don't throw error here since data was saved successfully
        console.warn("Email failed but contact was saved to database");
      }

      console.log("Form submitted successfully:", result);
      
      setSubmitted(true);
      toast("Message Sent Successfully!", {
        description: "We've received your request and will contact you soon. Check your email for confirmation.",
      });

    } catch (error) {
      console.error("Form submission error:", error);
      toast("Submission Failed", {
        description: "There was an error sending your message. Please try again or call us directly at (813) 577-0051.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you for contacting us!</h3>
        <p className="text-gray-600 mb-6">
          Your message has been successfully sent. We will contact you soon using your preferred contact method.
          You should also receive a confirmation email shortly.
        </p>
        <Button 
          onClick={() => {
            form.reset();
            setSubmitted(false);
          }}
          variant="outline"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St, Tampa, FL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Service */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Interested In *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="residential">Residential Window Cleaning</SelectItem>
                    <SelectItem value="commercial">Commercial Window Cleaning</SelectItem>
                    <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                    <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                    <SelectItem value="new-construction">New Construction Clean Up</SelectItem>
                    <SelectItem value="other">Other Services</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Property Type */}
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Type *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* How did you hear about us? */}
          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about us? *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Friend/Family Referral</SelectItem>
                    <SelectItem value="yelp">Yelp</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Preferred Date */}
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Date/Time (Optional)</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Preferred Contact Method */}
        <FormField
          control={form.control}
          name="contactMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Preferred Contact Method *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="phone" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Phone</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="email" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Email</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="text" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">Text Message</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message/Additional Details (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more about your needs..." 
                  className="resize-none" 
                  rows={5}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-trinity-navy hover:bg-trinity-navy/90" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to be contacted regarding your request. We respect your privacy and will never share your information.
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
