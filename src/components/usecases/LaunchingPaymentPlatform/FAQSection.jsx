// components/usecases/FAQSection.jsx
import { useState } from "react";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can I launch a PSP with Akurateco?",
      answer: "That depends on your business needs. Most new PSPs go live in as little as 5 days with our pre-built platform and fast onboarding.",
    },
    {
      question: "Do I need my own development team to start?",
      answer: "No. Akurateco is ready to use out of the box. You can launch without a dedicated team and add customisations later if you wish.",
    },
    {
      question: "How many payment methods and currencies can I offer to merchants?",
      answer: "Over 600 payment providers and 200+ currencies and cryptocurrencies are already integrated and ready to deploy. We can also develop custom integrations upon your request.",
    },
    {
      question: "Is the platform scalable if my transaction volume grows?",
      answer: "Absolutely. Our architecture is built for high volumes and can be scaled quickly without service interruption.",
    },
    {
      question: "Can I customize the platform with my own branding and pricing?",
      answer: "Yes. You can fully white-label the platform, set your own pricing plans, and brand the merchant portal as yours.",
    },
    {
      question: "Does Akurateco handle PCI DSS and other compliance requirements?",
      answer: "Yes. We're PCI DSS Level 1 certified and help you meet regional compliance requirements with secure infrastructure.",
    },
    {
      question: "Can I launch in multiple countries or regions at once?",
      answer: "Yes. Our global coverage and cloud-agnostic deployment let you expand to multiple markets while staying compliant locally.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.checkmark}>✅</span>
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.arrow}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}