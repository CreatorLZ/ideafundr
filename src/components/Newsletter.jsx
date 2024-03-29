import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  background: linear-gradient(
    101.97deg,
    #fdfafa 0.31%,
    rgba(217, 217, 217, 0.48) 100%
  );
  color: #3a4f5c;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom: 40px;

  form {
    margin-top: 40px;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    input {
      padding: 15px;
    }
  }
  @media only screen and (max-width: 480px) {
    form {
      width: 70%;
    }
    /* margin-bottom:10px; */
  }
`;
const Checkbox = styled.div`
  display: flex;
  gap: 10px;
  p {
    font-size: 12px;
  }
`;

const Whybox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 65px;
  }
  /* @media only screen and (max-width: 480px) {
  p{
    padding: 20px;
    text-align: center;
  }
} */
`;

const Button = styled.button`
  padding: 16px 32px;
  gap: 8px;
  background-color: #00806e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    transition: 250ms;
    background-color: white;
    color: #00806e;
  }
  @media only screen and (max-width: 480px) {
    &:hover {
      color: black;
    }
  }
`;

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Whybox>
        {" "}
        <p style={{ fontSize: "24px" }}> Join our Newsletter</p>{" "}
      </Whybox>
      <p style={{ padding: "5px", textAlign: "center" }}>
        Discover new and clever products in the IdeaFundr newsletter
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name@gmail.com" />
        <Checkbox>
          <input type="checkbox" style={{ width: "20px", cursor: "pointer" }} />
          <p>
            I agree to the Terms of Use and have read and understand <br />
            the Privacy Policy
          </p>
        </Checkbox>
        <Button>Join Newsletter</Button>
      </form>
    </Container>
  );
};

export default Newsletter;
