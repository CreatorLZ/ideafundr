import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 0px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  color: #34495e;
`;

const FAQAnswer = styled.div`
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  margin-top: ${(props) => (props.isOpen ? "1rem" : "0")};
  color: #7f8c8d;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const faqData = [
  {
    question: "How does the AR showcase work for inventors?",
    answer:
      "Our AR showcase allows inventors to create immersive, 3D presentations of their inventions. Inventors can upload 3D models, add interactive elements, and create virtual demonstrations that investors can explore using AR-enabled devices or web browsers.",
  },
  {
    question: "What benefits does AR provide for showcasing inventions?",
    answer:
      "AR provides a more engaging and interactive way to present inventions. It allows investors to see the invention from all angles, understand its scale, and even interact with virtual prototypes. This immersive experience can lead to better understanding and increased investor interest.",
  },
  {
    question: "Do investors need special equipment to view the AR showcases?",
    answer:
      "While AR-enabled devices like smartphones or tablets provide the best experience, our platform also offers a web-based viewer. This means investors can explore inventions in 3D on any device with a modern web browser, ensuring accessibility for all.",
  },
  {
    question:
      "How secure is the platform for sharing sensitive invention details?",
    answer:
      "We take security very seriously. All data is encrypted, and inventors have full control over who can access their showcases. We also offer features like watermarking and limited-time access to protect intellectual property.",
  },
  {
    question: "Can inventors update their AR showcases after creation?",
    answer:
      "Yes, inventors can update their showcases at any time. This allows for iterative improvements, adding new features, or refining the presentation based on feedback. Changes are reflected in real-time for all viewers.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      {/* <FAQTitle>Frequently Asked Questions</FAQTitle> */}
      {faqData.map((faq, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleFAQ(index)}>
            {faq.question}
            <IconWrapper>
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </IconWrapper>
          </FAQQuestion>
          <FAQAnswer isOpen={openIndex === index}>{faq.answer}</FAQAnswer>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default Faq;
