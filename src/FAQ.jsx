import React, { useState } from 'react';
import hello from "./assets/Hello.png"; 

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <span className={`text-primary transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is university procurement?",
      answer: "University procurement is the process of acquiring goods, services, and works for higher education institutions. It involves identifying needs, sourcing suppliers, negotiating contracts, and managing the entire purchasing process to ensure efficiency, cost-effectiveness, and compliance with regulations."
    },
    {
      question: "How can e-procurement benefit our university?",
      answer: "E-procurement can streamline your purchasing processes, reduce paperwork, increase transparency, and potentially lead to cost savings. It also provides better spend visibility, helps in supplier management, and can improve overall efficiency in the procurement department."
    },
    {
      question: "What types of goods and services does university procurement typically handle?",
      answer: "University procurement typically handles a wide range of goods and services, including office supplies, laboratory equipment, IT hardware and software, facilities management services, catering services, research materials, textbooks, and more."
    },
    {
      question: "How does sustainable procurement apply to universities?",
      answer: "Sustainable procurement in universities involves considering environmental, social, and economic factors in purchasing decisions. This can include buying energy-efficient equipment, sourcing from local suppliers, considering the lifecycle costs of products, and ensuring ethical labor practices in the supply chain."
    },
    {
      question: "What are the key challenges in university procurement?",
      answer: "Key challenges in university procurement include managing diverse stakeholder needs, ensuring compliance with regulations, balancing cost-effectiveness with quality, keeping up with technological advancements, and maintaining transparency in the procurement process."
    },
    {
      question: "How can we improve supplier relationships in university procurement?",
      answer: "Improving supplier relationships can be achieved through clear communication, fair and transparent processes, timely payments, and collaborative problem-solving. Regular performance reviews and feedback sessions can also help strengthen these relationships."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-primary font-semibold mb-2">FAQs</h4>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about university procurement and our services. If you can't find what you're looking for, please don't hesitate to contact us.
          </p>
        </div>
        
        {/* Centered Faq with no photo */}
        {/* <div className="flex justify-center">
          <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div> */}


        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-primary rounded-lg overflow-hidden">
              <img src={hello} alt="University procurement" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

