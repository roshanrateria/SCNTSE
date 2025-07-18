import { useState } from "react";
import { ChevronDown, ChevronUp, User2, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What subjects are included in SCNTSE?",
      answer: "SCNTSE covers Science & Humanities: Physics, Mathematics, Chemistry, and English (25 marks each)."
    },
    {
      question: "Who is eligible to participate?",
      answer: "All 12th pass students from any board in the year 2025 are eligible to register."
    },
    {
      question: "What is the exam date?",
      answer: "The exam will be held on 10th August 2025."
    },
    {
      question: "What is the scholarship amount for top performers?",
      answer: "The top performer will receive a scholarship of ₹1,00,000 INR (1 lakh rupees)."
    },
    {
      question: "How do I register for SCNTSE?",
      answer: "Registration will open soon on this website. Please check back regularly for updates and instructions."
    },
    {
      question: "Is there any registration fee?",
      answer: "Registration details, including any fees, will be announced soon. Stay tuned!"
    },
    {
      question: "What is the exam pattern?",
      answer: "The exam consists of 100 marks: Physics (25), Chemistry (25), Mathematics (25), and English (25). Duration: 3 hours."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, all Round 1 qualifiers will receive a certificate of merit."
    },
    {
      question: "What are the rounds after the written exam?",
      answer: "There are three rounds: Written Test, Interview, and Project. Only qualifiers move to the next round."
    },
    {
      question: "How will I know my exam venue?",
      answer: "Your exam venue will be mentioned in your admit card. You can choose your preferred venue during registration, subject to availability."
    },
    {
      question: "What documents do I need to bring on exam day?",
      answer: "Please bring your Class 12 mark sheet, a valid photo ID (Aadhaar/Passport/Driving License), and your exam admit card. All documents should be original with photocopies."
    },
    {
      question: "Who can I contact for help?",
      answer: "You can contact the organizing committee at scntse@iem.edu.in or call the numbers listed below."
    },
  ];

  const contacts = [
    { name: "Mr. Roshan Rateria", contact: "+91 98740 17285" },
    { name: "Dr. Prabir Kumar Das", contact: "+91 98748 57308" },
    { name: "Dr. Samapika Das Biswas", contact: "+91 96743 36593" },
    { name: "Mr. Ayush Banerjee", contact: "+91 94335 68060" },
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-effect overflow-hidden">
                <Button
                  variant="ghost"
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-accent transition-transform" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent transition-transform" />
                  )}
                </Button>
                {openItems.includes(index) && (
                  <CardContent className="px-6 pb-4 text-gray-300">
                    <p>{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
          {/* Contact Info Section */}
          <div className="mt-12 bg-gradient-to-br from-accent/10 to-white/10 rounded-xl p-8 max-w-xl mx-auto shadow-lg border border-accent/30">
            <h3 className="text-2xl font-bold text-accent mb-6 text-center tracking-tight flex items-center justify-center gap-2">
              For any query, contact:
            </h3>
            <ul className="space-y-4">
              {contacts.map((person, idx) => (
                <li key={idx} className="flex items-center justify-between bg-white/10 rounded-lg px-5 py-3 shadow-sm hover:bg-accent/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <User2 className="h-5 w-5 text-accent" />
                    <span className="font-medium text-lg text-white">{person.name}</span>
                  </div>
                  <a href={`tel:${person.contact.replace(/\s+/g, '')}`} className="flex items-center gap-1 text-accent font-semibold text-base hover:underline">
                    <Phone className="h-5 w-5" />
                    {person.contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
