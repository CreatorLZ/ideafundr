import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const images = [ 
      { id: 1, image: './images/SwiftXR.png'},
      { id: 2, image: './images/mouse.png' }, 
      { id: 3, image: './images/Knife.png' }, 
      { id: 4, image: './images/SwiftXR 2.png' }, 
      { id: 5, image: './images/Bicyle1.png'},
      { id: 6, image: './images/Ride.png'}];

const SliderWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 400px;
  overflow: hidden;
  @media only screen and (max-width: 500px) {
      display: none;
}
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media only screen and (max-width: 500px) {
      display: none;
}
`;

const Button = styled.button`
  border: none;
  background-color: ${({ active }) => active ? '#000' : '#ddd'};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
`;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <>
      <SliderWrapper>
        {images.map((image, index) => (
          <Slide key={image.id} active={index === activeIndex}>
            <Image src={image.image} alt={`Slide ${image.id}`} />
          </Slide>
        ))}
      </SliderWrapper>
      <ButtonWrapper>
        <Button onClick={handlePrev}>Prev</Button>
        {images.map((image, index) => (
          <Button
            key={image.id}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
        <Button onClick={handleNext}>Next</Button>
      </ButtonWrapper>
    </>
  );
};

export default Slider;
