import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 88px;
  gap: 8px;
  width: 100%;
  height: fit-content;
  padding: 50px;
  @media only screen and (max-width: 850px) {
    padding: 10px;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px;
    height: 60vh;
    padding-bottom:20px;
  }
`;
const Logo = styled.img`
  width: 183px;
  height: 64px;
  object-fit: cover;
  @media only screen and (max-width: 500px) {
    width: 180px;
    margin-left: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20px;
`;

const FlexItem = styled.div`
  width: 20%;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  color: #3a4f5c;
`;

const Socialdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  object-fit: cover;
  gap: 20px;
  box-sizing: border-box;
  padding: 25px;
`;
const Icons = styled.div`
  display: flex;
  gap: 45px;
  img {
    width: 22px;
    height: 20px;
    object-fit: contain;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Logo src="./images/Logo.png" alt="Logo" />
      <Wrapper>
        <FlexContainer>
          <FlexItem>
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "#3A4F5C" }}
            >
              About
            </Link>
          </FlexItem>
          <FlexItem>FAQ's </FlexItem>
          <FlexItem>
            <Link
              to="/Home"
              style={{ textDecoration: "none", color: "#3A4F5C" }}
            >
              Home
            </Link>
          </FlexItem>
          <FlexItem>
            <Link
              to="/Inventors"
              style={{ textDecoration: "none", color: "#3A4F5C" }}
            >
              Inventors
            </Link>
          </FlexItem>
          <FlexItem>P Policy</FlexItem>
          <FlexItem>Contact</FlexItem>
          <FlexItem>
            <a
              href="https://ideafundr.wordpress.com"
              style={{ textDecoration: "none", color: "#3A4F5C" }}
            >
              Blog
            </a>
          </FlexItem>
          <FlexItem>
            <Link
              to="/Explore"
              style={{ textDecoration: "none", color: "#3A4F5C" }}
            >
              Explore
            </Link>
          </FlexItem>
          <FlexItem>
            <Link
              to="/Investors"
              style={{ textDecoration: "none", color: "#3A4F5C" }}
            >
              Investors
            </Link>
          </FlexItem>
          <FlexItem>T & C's</FlexItem>
        </FlexContainer>
      </Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <Socialdiv>
          <Icons>
            <img src="./images/001-facebook.png" alt="image" />
            <img src="./images/003-twitter.png" alt="image" />
            <img src="./images/004-instagram.png" alt="image" />
          </Icons>
        </Socialdiv>
        <p>Copyright © 2023. Ideafundr. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
