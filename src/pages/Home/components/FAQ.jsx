import { useState } from "react";
import faq from "../../../assets/FAQs.svg";

const faqData = [
  {
    question: "How do I create an account?",
    answer:
      "Click the 'Sign Up' button in the top right corner and follow the registration process.",
  },
  {
    question: "I forgot my password. What should I do?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Go to 'My Account' settings and select 'Edit Profile' to make changes.",
  },
  {
    question: "Can I change my email address?",
    answer:
      "Yes, go to profile settings and update your email address after verifying it.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-20 w-[92%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text & FAQs */}
        <div>
          <h2 className="text-3xl font-mono font-semibold mb-4 border-b-4 border-yellow-400 w-fit text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer rounded-lg p-4 shadow-sm transition hover:shadow-md bg-white border border-gray-200"
              >
                <div className="flex justify-between items-center text-gray-800">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-2xl text-yellow-400">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:flex justify-center">
          <img src={faq} alt="FAQ" className="w-96" />
        </div>
      </div>
    </section>
  );
}
