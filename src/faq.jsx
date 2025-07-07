import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is shipping free worldwide?",
    answer: "Yes, we offer free global shipping on all orders over $50.",
  },
  {
    question: "Can I change my order?",
    answer: "You can update your order within 2 hours of placing it.",
  },
  {
    question: "How do I track my package?",
    answer: "You'll receive a tracking link via email once your order ships.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 font-sans">
      <h2 className="text-4xl font-semibold text-center mb-10 text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-800 text-lg font-medium tracking-tight"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
