import React from "react";
import FAQBar from "../../components/FAQBar";

export default function FAQ() {
  const faqContent = [
    {
      title: "How Can I make an Order?",
      details:
        "In an exceptionally challenging biennium, see how FAO rose to the challenge, implementing a global, holistic and multipronged strategy to support Members.",
    },
    {
      title: "Do you accept credit cards?",
      details:
        "In an exceptionally challenging biennium, see how FAO rose to the challenge, implementing a global, holistic and multipronged strategy to support Members.",
    },
    {
      title: "Is this the best catering service?",
      details:
        "In an exceptionally challenging biennium, see how FAO rose to the challenge, implementing a global, holistic and multipronged strategy to support Members.",
    },
    {
      title: "How Can I make an Order?",
      details:
        "In an exceptionally challenging biennium, see how FAO rose to the challenge, implementing a global, holistic and multipronged strategy to support Members.",
    }
  ];

  return (
    <div className="py-20 bg-slate-200 px-5">
      <h2 className="section-title">Frequently Asked Question</h2>
      {faqContent.map((faq, i) => (
        <FAQBar key={i} title={faq.title} details={faq.details} />
      ))}
    </div>
  );
}
