import React from "react";
import styled from "styled-components";
import {
  Thirdprompt2,
  Thirdpromptdiv1,
  Thirdpromptdiv2,
  Thirdpromptdiv3,
  Thirdpromptdiv4,
  Whybox,
} from "./Landing";
import Coming2 from "../components/Coming2";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
`;

export const Whoweare = styled.div`
  width: 100%;
  height: 682px;
  background: #1d2d35;
  display: flex;
  flex-direction: column;
  padding: 70px;
`;
export const Right = styled.div`
  display: flex;
`;
export const Left = styled.div`
  display: flex;
  padding-top: 40px;
  img {
    width: 515px;
    height: 396px;
  }
`;
export const P2 = styled.p`
  padding-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
`;

export const P1 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  color: #f2f2f2;
`;

const About = () => {
  return (
  
      <Container>
        <Whoweare>
          <Right>
            <P1>Who We Are</P1>
          </Right>
          <Left>
            <P2>
              At IdeaFundr we are passionate about helping product owners
              succeed by connecting them with potential investors. Our web
              platform is designed to streamline the investment process and
              provide a secure environment for product owners to find the right
              funding opportunities. Our team is made up of experienced
              professionals who understand the challenges of securing
              investments for product development. We are committed to providing
              a user-friendly platform that offers valuable resources and
              support to help product owners navigate the investment landscape.
            </P2>
            <img src="images/Rectangle 27.png" alt="image" />
          </Left>
        </Whoweare>
        <Thirdprompt2>
          <Whybox>
            <p>Why choose us?</p>
          </Whybox>
          <Thirdpromptdiv1>
            <p>
              With our platform, you can easily discover a revolutionary
              invention, which you can invest in and help bring to market.
            </p>
          </Thirdpromptdiv1>
          <Thirdpromptdiv2>
            <p>
              With our inbuilt tool inventor can track the progress and receive
              feedback on their profile, so that they can continuously improve
              it and increase their chance of funding.
            </p>
          </Thirdpromptdiv2>
          <Thirdpromptdiv3>
            <p>
              With our platform , you can showcase your new invention to
              investors. which will lead to successful crowdfunding campaign and
              help you lunch your invention.
            </p>
          </Thirdpromptdiv3>
          <Thirdpromptdiv4>
            <p>
              With our inbuilt tool investor can easily evaluate the potential
              of an invention to make informed investment decision.
            </p>
          </Thirdpromptdiv4>
        </Thirdprompt2>
        <Whoweare>
          <P1>What We Do</P1>
          <Left style={{ gap: "10px" }}>
            <img src="images/Rectangle 28.png" alt="image" />
            <P2>
              At IdeaFundr, our mission is to empower product owners by
              providing a seamless platform to connect with potential investors
              and secure funding for their products We foster a community of
              like-minded product owners and investors, allowing you to network,
              collaborate, and learn from each other. We prioritize the security
              and privacy of your information. Our platform employs
              state-of-the-art security measures, such as encryption and strict
              data privacy protocols, to safeguard your data and ensure a safe
              and trustworthy environment for investment transactions. IdeaFundr
              continuously strive to improve and enhance our platform based on
              user feedback and market trends. We are committed to delivering a
              user-friendly experience
            </P2>
          </Left>
        </Whoweare>
        <Coming2 />
        <Newsletter />
        <Footer />
      </Container>
  );
};

export default About;
