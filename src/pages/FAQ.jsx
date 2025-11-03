import React, { useState } from 'react';
import '../styles/Pages.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of vessels does GCA provide crew for?",
      answer: "We provide qualified marine professionals for various vessel types including container ships, bulk carriers, tankers, general cargo vessels, Ro-Ro vessels, and offshore vessels."
    },
    {
      question: "How do I request crew for my vessel?",
      answer: "You can contact us through our contact form, email at crewing@gcagency.ge, or phone at 593 10 78 78 or 592 44 44 36. Our team will discuss your requirements and provide suitable crew members."
    },
    {
      question: "Are all crew members certified?",
      answer: "Yes, all marine professionals provided by GCA are certified and meet international standards. We verify all credentials, certifications, and qualifications before placement."
    },
    {
      question: "What qualifications do you verify?",
      answer: "We verify STCW certificates, medical clearances, seaman's books, passports, and other required documentation. We also conduct background checks and credential verification."
    },
    {
      question: "How quickly can you provide crew?",
      answer: "Crew placement timelines depend on your specific requirements and availability. We work efficiently to meet your operational schedules and will provide timeframes during our initial consultation."
    },
    {
      question: "What are your service areas?",
      answer: "We serve shipowners worldwide. Our office is located in Batumi, Georgia, but we provide crewing services globally for international shipping companies."
    },
    {
      question: "Do you provide crew management services?",
      answer: "Yes, we offer comprehensive crew management services including scheduling, documentation management, certification tracking, and ongoing support."
    },
    {
      question: "How do you ensure quality?",
      answer: "We maintain strict quality standards through thorough verification processes, certification checks, and ongoing monitoring. We also hold ISO and MLC certifications."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="luxury-box">
          <h1>Frequently Asked Questions</h1>
          
          <section className="content-section" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </section>

          <div className="content-section" style={{ background: 'var(--marine-blue-pale)', marginTop: '2rem', padding: '2rem' }}>
            <h2>Still Have Questions?</h2>
            <p>
              If you couldn't find the answer you're looking for, please don't hesitate to contact us. 
              Our team is ready to assist you with any inquiries.
            </p>
            <a href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

