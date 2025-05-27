
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  service: string;
  propertyType: string;
  source: string;
  contactMethod: string;
  message?: string;
  preferredDate?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form data:", formData);

    // Email to business owner (you)
    const businessEmailResponse = await resend.emails.send({
      from: "Trinity Quality Services <onboarding@resend.dev>",
      to: ["tqs.david@gmail.com"],
      subject: `New Contact Form Submission - ${formData.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.address ? `<p><strong>Address:</strong> ${formData.address}</p>` : ''}
          <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
          ${formData.preferredDate ? `<p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>` : ''}
        </div>
        
        <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Service Details:</h3>
          <p><strong>Service Requested:</strong> ${formData.service}</p>
          <p><strong>Property Type:</strong> ${formData.propertyType}</p>
          <p><strong>How they heard about us:</strong> ${formData.source}</p>
        </div>
        
        ${formData.message ? `
        <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Additional Message:</h3>
          <p>${formData.message}</p>
        </div>
        ` : ''}
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          This email was sent from your Trinity Quality Services website contact form.
        </p>
      `,
    });

    // Confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Trinity Quality Services <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting Trinity Quality Services!",
      html: `
        <h2>Thank you for contacting us, ${formData.fullName}!</h2>
        <p>We have received your inquiry about our <strong>${formData.service}</strong> services and will get back to you soon via your preferred contact method: <strong>${formData.contactMethod}</strong>.</p>
        
        <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #1e40af;">
          <h3>What happens next?</h3>
          <ul>
            <li>We'll review your request within 24 hours</li>
            <li>You'll receive a personalized quote for your ${formData.propertyType.toLowerCase()} property</li>
            <li>We'll contact you via ${formData.contactMethod} to discuss your needs</li>
          </ul>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Your Request Summary:</h3>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Property Type:</strong> ${formData.propertyType}</p>
          ${formData.preferredDate ? `<p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>` : ''}
        </div>
        
        <p>If you have any immediate questions, feel free to call us at <strong>(813) 577-0051</strong>.</p>
        
        <p>Best regards,<br>
        Trinity Quality Services Team<br>
        Professional Window Cleaning Services</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">
          Trinity Quality Services<br>
          2780 E. Fowler Ave #421, Tampa, FL 33612<br>
          Phone: (813) 577-0051<br>
          Email: tqs.david@gmail.com
        </p>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);
    console.log("Customer email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        businessEmail: businessEmailResponse,
        customerEmail: customerEmailResponse
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
