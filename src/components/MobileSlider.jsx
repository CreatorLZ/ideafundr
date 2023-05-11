import React, { useState } from 'react';
import styled from 'styled-components';

const images = [ 
    { id: 1, image: './images/SwiftXR.png'},
    { id: 2, image: './images/mouse.png' }, 
    { id: 3, image: './images/Knife.png' }, 
    { id: 4, image: './images/SwiftXR 2.png' }, 
    { id: 5, image: './images/Bicyle1.png'},
    { id: 6, image: './images/Ride.png'}];

const SliderWrapper = styled.div`
display: none;
@media only screen and (max-width: 500px) {
     display: flex;
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
}
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: ${({ activeIndex }) => `calc(-${activeIndex * 100}%)`};
  width: 100%;
  height: 100%;
  display: flex;
  transition: left 0.5s ease-in-out;
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ButtonWrapper = styled.div`
display: none;
@media only screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    position: relative; /* Added position relative */
    z-index: 1; /* Added higher z-index */
}
`;

const Button = styled.button`
  border: none;
  background-color: ${({ active }) => (active ? '#000' : '#ddd')};
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

  return (
    <div>
      <SliderWrapper>
        <Slide activeIndex={activeIndex}>
          {images.map((image) => (
            <Image key={image.id} src={image.image} alt={`Slide ${image.id}`} />
          ))}
        </Slide>
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
    </div>
  );
};

export default Slider;
