import React from "react";
import Footer from "@/components/Footer/Footer";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary mr-2" />
          </div>
          <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-lg font-semibold">
              How do I track my order?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our shipping partner's website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-lg font-semibold">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We offer a 30-day return policy on most items. Products must be in their original condition with all tags attached. Visit our Returns page for more details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-lg font-semibold">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-lg font-semibold">
              Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, we ship to most countries worldwide. International shipping times and costs vary by destination. Check our Shipping page for more information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-lg font-semibold">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You can reach our customer support team via email at support@vault.com or call us at +1 (555) 123-4567 during business hours.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-lg font-semibold">
              Are my payment details secure?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, we use industry-standard encryption to protect your payment information. We never store your full credit card details on our servers.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;