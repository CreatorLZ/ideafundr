import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100vw;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

const TestimonialCard = styled.div`
  flex: 0 0 300px;
  margin: 0 1rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: ${({ isActive }) =>
    isActive ? "scale(1.1) translateZ(0)" : "scale(0.9)"};
  opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
  z-index: ${({ isActive }) => (isActive ? 1 : 0)};

  @media (max-width: 768px) {
    flex: 0 0 80%; // Make cards take more space on smaller screens
    margin: 0 0.5rem; // Reduce margin
  }
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #a0aec0;
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  color: #2d3748;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const JobTitle = styled.p`
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #4a5568;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    color: #2d3748;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; // Reduce button size on smaller screens
  }
`;

const LeftButton = styled(NavButton)`
  left: 1rem;
`;

const RightButton = styled(NavButton)`
  right: 1rem;
`;

const NavDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#4a5568" : "#cbd5e0")};
  margin: 0 5px;
  cursor: pointer;
`;

const testimonials = [
  {
    name: "Adams Leon",
    title: "Honda Inventor",
    quote:
      "With our inbuilt tool inventor can track the progress and receive feedback on their profile. With our inbuilt tool inventor can track the progress",
    rating: 4,
    src: "/images/2.png",
  },
  {
    name: "Sarah Johnson",
    title: "Tech Innovator",
    quote:
      "The AR showcase platform has revolutionized how I present my inventions. Investors are consistently impressed by the immersive experience.",
    rating: 5,
    src: "./images/Rectangle 11 (3).png",
  },
  {
    name: "Michael Chang",
    title: "Startup Founder",
    quote:
      "This platform has significantly reduced the time from concept to investment. The ability to showcase my ideas in AR is game-changing.",
    rating: 4,
    src: "./images/1.png",
  },
  {
    name: "Emily Rodriguez",
    title: "Product Designer",
    quote:
      "The feedback system integrated with the AR tool has been invaluable for refining my inventions. It's like having a focus group at your fingertips.",
    rating: 5,
    src: "./images/Rectangle3.png",
  },
  {
    name: "David Patel",
    title: "Robotics Engineer",
    quote:
      "As someone working in a highly visual field, the AR capabilities of this platform have been a godsend. It's so much easier to convey complex ideas.",
    rating: 4,
    src: "./images/Rectangle3.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 7000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  // Logic to get the 3 testimonials to display at a time
  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    const len = testimonials.length;

    // Left testimonial (wrap around if needed)
    visibleTestimonials.push({
      ...testimonials[(currentIndex - 1 + len) % len],
      isActive: false,
    });

    // Center testimonial (Active)
    visibleTestimonials.push({
      ...testimonials[currentIndex],
      isActive: true,
    });

    // Right testimonial (wrap around if needed)
    visibleTestimonials.push({
      ...testimonials[(currentIndex + 1) % len],
      isActive: false,
    });

    return visibleTestimonials;
  };

  return (
    <CarouselContainer>
      <Title>Testimonials</Title>
      <TestimonialWrapper>
        {getVisibleTestimonials().map((testimonial, index) => (
          <TestimonialCard key={index} isActive={testimonial.isActive}>
            <Avatar>
              <img
                src={testimonial.src}
                alt="rec"
                style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              />
            </Avatar>
            <Name>{testimonial.name}</Name>
            <JobTitle>{testimonial.title}</JobTitle>
            <Quote>{testimonial.quote}</Quote>
            <StarRating>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < testimonial.rating ? "#4a5568" : "none"}
                  stroke={i < testimonial.rating ? "#4a5568" : "#cbd5e0"}
                />
              ))}
            </StarRating>
          </TestimonialCard>
        ))}
      </TestimonialWrapper>
      <LeftButton onClick={prevTestimonial}>
        <ChevronLeft />
      </LeftButton>
      <RightButton onClick={nextTestimonial}>
        <ChevronRight />
      </RightButton>
      <NavDots>
        {testimonials.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </NavDots>
    </CarouselContainer>
  );
};

export default Testimonials;
