import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer comprehensive psychiatric and psychological care, including individual therapy, family therapy, crisis intervention, and evidence-based treatments such as CBT and EMDR."
  },
  {
    question: "Do you offer telehealth or online consultations?",
    answer:
      "Yes, we provide secure and confidential online therapy sessions to ensure accessibility and flexibility for our patients."
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment directly through our website, call our helpline, or visit our clinic in person. Same-day appointments may also be available."
  },
  {
    question: "Are your treatments confidential?",
    answer:
      "Absolutely. All consultations and treatments are 100% confidential and conducted under DHA licensing and regulations."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary">Frequently Asked Questions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Questions, <span className="bg-gradient-primary bg-clip-text text-transparent">Answered</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services, appointments, and care process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={faq.question}
              className="overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <CardHeader className="p-0">
                  <CardTitle className="text-lg font-medium text-foreground">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <CardContent className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
