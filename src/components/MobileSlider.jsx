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
display: none;
  @media only screen and (max-width: 500px) {
    display: flex;
    width: 100%;
    height: 400px;
    overflow: hidden;
     position: relative;
}

`;

const Slide = styled.div`
display: none;
 @media only screen and (max-width: 500px) {
      display: flex;
   position: absolute;
   top: 0;
   left: ${({ activeIndex }) => `calc(-${activeIndex * 100}%)`};
   width: 100%;
   height: 100%;
   display: flex;
   transition: left 0.5s ease-in-out;

}
`;

const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  border: none;
  z-index: 50;
  background-color: transparent;
  width: 50px;
  height: 50px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
  border-radius:5px;
  opacity:0.9;

  &:hover {
    background-color: #aaa;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  img{
    width: 50px;
    height: 50px;
  }
`;

const PrevButton = styled(Button)`
  position: absolute;
  left: 5px;
  bottom:220px;
`;

const NextButton = styled(Button)`
  position: absolute;
  right: 5px;
  bottom:220px;
`;

const MobileSlider = () => {
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
    <SliderWrapper>
      <PrevButton onClick={handlePrev} disabled={activeIndex === 0}>
    <img src='./images/icons8-back-30.png' alt=''/>
      </PrevButton>
      <NextButton onClick={handleNext} disabled={activeIndex === images.length - 1}>
      <img style={{color:'white'}} src='./images/icons8-forward-30.png' alt=''/>
      </NextButton>
      <Slide activeIndex={activeIndex}>
        {images.map((image) => (
          <Image key={image.id} src={image.image} alt={`Slide ${image.id}`} />
        ))}
      </Slide>
    </SliderWrapper>
  );
};

export default MobileSlider;
