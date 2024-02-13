import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import { Button } from "../components/Navbar";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 580px) {
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

const PathChoice = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  @media only screen and (max-width: 580px) {
    width: 45%;
    padding: 5px 10px;
    p {
      width: 100%;
      text-align: center;
    }
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #333;
  background-color: white;
  appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: transparent;
  }

  &:checked::before {
    content: "\u2713"; /* Unicode for a checkmark */
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #00806e;
    font-weight: bold;
  }
`;

const Path = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };

  const handleContinueClick = () => {
    // Redirect based on checkbox selection
    if (isChecked1) {
      navigate("/Register");    } 
      else if (isChecked2) {
        navigate("/Register");
          }
  };

  return (
    <Container>
      <h2 style={{ textDecoration: "none", color: "#3A4F5C" }}>
        Join as an inventor or investor
      </h2>
      <Wrapper>
        <PathChoice onClick={handleCheckboxChange1}>
          <p>I am an inventor</p>
          <Checkbox checked={isChecked1} onChange={handleCheckboxChange1} />
        </PathChoice>
        <PathChoice onClick={handleCheckboxChange2}>
          <p>I am an investor</p>
          <Checkbox checked={isChecked2} onChange={handleCheckboxChange2} />
        </PathChoice>
      </Wrapper>
      <Button onClick={handleContinueClick}>Continue</Button>
    </Container>
  );
};

export default Path;
