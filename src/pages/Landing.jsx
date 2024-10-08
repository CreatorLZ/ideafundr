import React from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Child2, Wrappercard2 } from "./Home";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";

const Container = styled.div`
  padding: 0;
  margin-top: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const Firstprompt = styled.div`
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  overflow-y: hidden;
  display: flex;
  line-height: 87px;
  align-items: center;
  justify-content: space-between;
  padding: 15px 60px;
  padding-top: 20px;
  img {
    border-radius: 10px;
  }
  @media only screen and (max-width: 1000px) {
    width: 100vw;
    img {
      display: none;
    }
  }
  @media only screen and (max-width: 670px) {
    img {
      display: none;
    }

    background-size: cover;
    overflow: hidden;
    padding-left: 20px;
    line-height: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    height: fit-content;
  }
`;

const Right = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  img {
    width: 80%;
    height: 80%;
    border-radius: 10px;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const Right2 = styled.div`
  width: 85%;
  height: 100%;
  display: none;
  align-items: center;
  img {
    height: 100%;
    border-radius: 10px;
  }

  @media only screen and (max-width: 670px) {
    display: flex;
    align-items: center;
  }
`;

const P1 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: white;
`;

const P2 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: white;

  @media only screen and (max-width: 670px) {
    br {
      display: none;
    }
  }
`;

const P3 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: white;
  margin-top: 25px;
  margin-bottom: 10px;
  @media only screen and (max-width: 670px) {
    margin-bottom: 40px;
  }
`;
const Whattododiv = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 80px;
  @media only screen and (max-width: 670px) {
    display: none;
  }
`;
const Whattodobox2 = styled.div`
  display: flex;
  width: 200px;
  height: 160px;
  background: #ffffff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    color: #1d2d35;
  }
  @media only screen and (max-width: 850px) {
    width: 150px;
  }
  @media only screen and (max-width: 550px) {
    width: 140px;
  }
  @media only screen and (max-width: 670px) {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 16px 32px;
  background-color: #00806e;
  color: #fefefe;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    transition: 250ms;
    background-color: #f8f4f4;
    color: #00806e;
  }
  :focus {
    outline: none;
  }
`;

export const Button1 = styled.div`
  padding: 0px 32px;
  background-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #00806e;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  width: 250px;
  transition: ease 1s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #00806e;
    transition: width 250ms ease-out;
  }

  &:hover::before {
    width: 100%;
  }
  :focus {
    outline: none;
  }

  @media only screen and (max-width: 580px) {
    width: 230px;
  }
  @media only screen and (max-width: 670px) {
    width: 168px;
    border: 1px solid #00806e;
    padding: 10px 32px;
  }
`;

export const Button2 = styled.button`
  padding: 18px 32px;
  gap: 8px;
  background-color: #00806e;
  color: white;
  border: none;
  border-radius: 5px;
  width: 250px;
  cursor: pointer;
  transition: ease 1s;
  :hover {
    transition: 250ms;
    background-color: white;
    color: #00806e;
  }

  @media only screen and (max-width: 580px) {
    width: 230px;
  }
  @media only screen and (max-width: 670px) {
    width: 168px;
  }
`;

const Firstp = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 87px;
  @media only screen and (max-width: 100px) {
    line-height: 50px;
    font-size: 40px;
  }
  @media only screen and (max-width: 670px) {
    line-height: 40px;
    font-size: 30px;
  }
`;
const Secondp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  margin-bottom: 30px;
  color: grey;
  @media only screen and (max-width: 670px) {
    font-size: 20px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: fit-content;
  @media only screen and (max-width: 670px) {
    width: 100vw;
    padding-right: 15px;
  }
`;

const Buttondiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  Link {
    text-decoration: none;
  }
`;

const Secondprompt = styled.div`
  width: 100%;
  height: 100vh;
  background: #1d2d35;
  align-items: center;
  overflow: hidden;
  display: flex;
  ul {
    display: none;
    color: white;
    list-style: none;
    gap: 15px;
    li {
      display: flex;
      &::before {
        content: "✅";
        margin-right: 8px;
      }
    }
  }
  img {
    width: 40%;
    height: 60vh;
    padding-left: 88px;
    object-fit: cover;
    border-radius: 10px;
  }
  @media only screen and (max-width: 1000px) {
    img {
      display: none;
    }
    button {
      display: none;
    }
  }
  @media only screen and (max-width: 670px) {
    img {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: column;
    }
    height: 90vh;
  }
`;
const Thirdprompt = styled.div`
  width: 100%;
  height: 100vh;
  background: #f2f2f2;
  align-items: center;
  color: #3a4f5c;
  overflow: hidden;
  display: flex;
  ul {
    display: none;
  }
  img {
    width: 40%;
    height: 60vh;
    padding-left: 88px;
    object-fit: cover;
    border-radius: 10px;
  }

  @media only screen and (max-width: 1000px) {
    img {
      display: none;
    }
    overflow: scroll;
    ul {
      display: flex;
      flex-direction: column;
      color: #3a4f5c;
      gap: 15px;
      li {
        display: flex;
        &::before {
          content: "✅";
          margin-right: 8px;
        }
      }
    }
    button {
      display: none;
    }
    margin-left: none;
  }
  @media only screen and (max-width: 670px) {
    height: 90vh;
  }
`;

export const Thirdprompt2 = styled.div`
  width: 100%;
  margin-top: 40px;
  padding-top: 50px;
  height: 90vh;
  flex-direction: column;
  background: #ffffff;
  color: #3a4f5c;
  overflow: hidden;
  display: flex;
  position: relative;
  ul {
    display: none;
  }
  img {
    width: 553px;
    height: 387px;
    padding-left: 88px;
    object-fit: cover;
  }
  @media only screen and (max-width: 1000px) {
    height: 100%;
    ul {
      display: flex;
      flex-direction: column;
      color: #3a4f5c;
      gap: 35px;
      padding: 20px;
      height: 100%;
      li {
        display: flex;
        &::before {
          content: "🔥";
          margin-right: 8px;
        }
      }
    }
  }
  @media only screen and (max-width: 670px) {
    height: 100%;
    ul {
      display: flex;
      flex-direction: column;
      color: #3a4f5c;
      gap: 35px;
      padding: 20px;
      height: 100%;
      li {
        display: flex;
        &::before {
          content: "🔥";
          margin-right: 8px;
        }
      }
    }
  }
`;
export const Whybox = styled.div`
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
  @media only screen and (max-width: 850px) {
    margin-bottom: 38px;
  }
  @media only screen and (max-width: 670px) {
    p {
      font-size: 2em;
      text-align: center;
      line-height: 40px;
    }
  }
`;

export const Thirdpromptdiv1 = styled.div`
  width: 405px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #3a4f5c;
  width: 546px;
  height: 149px;
  margin-top: 20px;
  margin-left: 120px;
  background: rgba(253, 253, 253, 0.1);
  box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
  backdrop-filter: blur(20px);

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 670px) {
    display: none;
  }
`;
export const Thirdpromptdiv2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #3a4f5c;
  position: absolute;
  width: 546px;
  height: 149px;
  left: 80px;
  top: 320px;

  background: rgba(253, 253, 253, 0.1);
  box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
  backdrop-filter: blur(20px);

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 670px) {
    display: none;
  }
`;

export const Thirdpromptdiv3 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #3a4f5c;
  position: absolute;
  width: 546px;
  height: 189px;
  left: 750px;
  top: 120px;

  background: rgba(253, 253, 253, 0.1);
  box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
  backdrop-filter: blur(20px);

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 670px) {
    display: none;
  }
`;

export const Thirdpromptdiv4 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #3a4f5c;
  position: absolute;
  width: 546px;
  height: 189px;
  left: 680px;
  top: 330px;

  background: rgba(253, 253, 253, 0.1);
  box-shadow: 10px 10px 16px rgba(210, 208, 208, 0.2);
  backdrop-filter: blur(20px);

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 670px) {
    display: none;
  }
`;

export const Thirdprompt3 = styled.div`
  width: 100%;
  margin-top: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 90vh;
  flex-direction: column;
  background: white;
  color: #3a4f5c;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 670px) {
    height: 100vh;
  }
`;

export const Comingsoon = styled.div`
  width: 90%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    101.97deg,
    #fdfafa 0.31%,
    rgba(217, 217, 217, 0.48) 100%
  );
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 22px;
    text-align: center;
  }
`;

const Secondprompttext = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  gap: 20px;
  @media only screen and (max-width: 670px) {
    margin: 0;
    padding: 20px;
  }
`;

const Landing = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(109, 107, 107, 0.2)",
          width: "50px",
          height: "70px",
          zIndex: "10",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(109, 107, 107, 0.2)",
          width: "50px",
          height: "70px",
          zIndex: "10",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Wrapper>
        <Firstprompt>
          <Left>
            <Firstp>
              Showcase your <span style={{ color: "#FF6B6B" }}>invention</span>{" "}
              to <span style={{ color: "#00806e" }}>investors</span> with
              immersive tech.
            </Firstp>
            <Secondp>
              Get investment for your brightest Idea by demonstrating in a fully
              immersive virtual environment.
            </Secondp>
            <Buttondiv>
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <Button1 style={{ fontSize: "18px" }}>Log in</Button1>
              </Link>
              <Link to="/Path">
                <Button2 style={{ fontSize: "18px" }}>Get started</Button2>
              </Link>
            </Buttondiv>
            <Right2 style={{ paddingTop: "40px" }}>
              <Slider
                style={{
                  width: "100%",
                  height: "100%",
                  paddingLeft: "20px",
                  border: "none",
                }}
                {...settings}
              >
                <img
                  style={{ width: "90%", height: "100%", borderRadius: "10px" }}
                  src="./images/invent5.png"
                  alt="image1"
                />
                <img
                  style={{ width: "90%", height: "100%", borderRadius: "10px" }}
                  src="./images/invent3.jfif"
                  alt="image2"
                />
                <img
                  style={{ width: "90%", height: "100%", borderRadius: "10px" }}
                  src="./images/invent.jfif"
                  alt="image3"
                />
              </Slider>
            </Right2>
          </Left>
          <Right style={{ paddingTop: "0px" }}>
            <Slider
              style={{
                width: "100%",
                height: "100%",
                padding: "5px 20px",
                border: "none",
              }}
              {...settings}
            >
              <img
                style={{ width: "90%", height: "100%", borderRadius: "10px" }}
                src="/images/invent5.png"
                alt="image4"
              />
              <img
                style={{ width: "90%", height: "100%", borderRadius: "10px" }}
                src="/images/invent3.jfif"
                alt="image5"
              />{" "}
              <img
                style={{ width: "90%", height: "100%", borderRadius: "10px" }}
                src="/images/invent.jfif"
                alt="image6"
              />
            </Slider>
          </Right>
        </Firstprompt>
        <Secondprompt>
          <img src="./images/Rectangle2.png" alt="image8" />
          <Secondprompttext>
            <P1>Are you an inventor?</P1>
            <P2>
              Showcase your invention to prospective investors, so you <br />{" "}
              can secure funding to bring your product to market and
              <br /> scale as you wish.
            </P2>
            <P3>Here’s what you need to do</P3>
            <Whattododiv>
              <Whattodobox2>
                <p>Create a detailed profile of your invention</p>
              </Whattodobox2>
              <Whattodobox2>
                <p>Upload your invention demonstration using AR/VR</p>
              </Whattodobox2>
              <Whattodobox2>
                <p>
                  Connect with potential investors who might be interested in
                  your idea
                </p>
              </Whattodobox2>
            </Whattododiv>
            <ul>
              <li>
                <p>Create a detailed profile of your invention</p>
              </li>
              <li>
                <p>Upload your invention demonstration using AR/VR</p>
              </li>
              <li>
                <p>
                  Connect with potential investors who might be interested in
                  your idea
                </p>
              </li>
            </ul>
            <Buttondiv style={{ justifyContent: "center" }}>
              <Button2>Showcase Your Invention</Button2>
            </Buttondiv>
          </Secondprompttext>
        </Secondprompt>
        <Thirdprompt>
          <Secondprompttext>
            <P1 style={{ color: " #3A4F5C" }}>Are you an Investor?</P1>
            <P2 style={{ color: " #3A4F5C" }}>
              Find promising inventions to invest in, so that you can
              <br /> support innovative ideas and potentially earn a return{" "}
              <br />
              on your investment.{" "}
            </P2>
            <P3 style={{ color: " #3A4F5C" }}>Here’s what you need to do</P3>
            <Whattododiv>
              <Whattodobox2 style={{ background: "#1D2D35" }}>
                <p style={{ color: "#FFFFFF" }}>
                  Create a detailed profile featuring your interests
                </p>
              </Whattodobox2>
              <Whattodobox2 style={{ background: "#1D2D35" }}>
                <p style={{ color: "#FFFFFF" }}>
                  Search for inventions based on your investment criteria
                </p>
              </Whattodobox2>
              <Whattodobox2 style={{ background: "#1D2D35" }}>
                <p style={{ color: "#FFFFFF" }}>Connect with inventors</p>
              </Whattodobox2>
            </Whattododiv>
            <Buttondiv style={{ justifyContent: "center" }}>
              <Button2>Discover New Inventions</Button2>
              <ul>
                <li>
                  <p>Create a detailed profile featuring your interests</p>
                </li>
                <li>
                  <p>Search for inventions based on your investment criteria</p>
                </li>
                <li>
                  <p>Connect with inventors</p>
                </li>
              </ul>
            </Buttondiv>
          </Secondprompttext>
          <img src="./images/Rectangle3.png" alt="image9" />
        </Thirdprompt>
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
              With our platform , you can showcase your new invention to
              investors. which will lead to successful crowdfunding campaign and
              help you lunch your invention.
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
              With our platform , you can showcase your new invention to
              investors. which will lead to successful crowdfunding campaign and
              help you lunch your invention.
            </p>
          </Thirdpromptdiv4>
          <ul>
            <li>
              <p>
                With our platform, you can easily discover a revolutionary
                invention, which you can invest in and help bring to market.
              </p>
            </li>
            <li>
              <p>
                With our platform , you can showcase your new invention to
                investors. which will lead to successful crowdfunding campaign
                and help you lunch your invention.
              </p>
            </li>
            <li>
              <p>
                With our platform , you can showcase your new invention to
                investors. which will lead to successful crowdfunding campaign
                and help you lunch your invention.
              </p>
            </li>
            <li>
              {" "}
              <p>
                With our platform , you can showcase your new invention to
                investors. which will lead to successful crowdfunding campaign
                and help you lunch your invention.
              </p>
            </li>
          </ul>
        </Thirdprompt2>

        <Whybox style={{ paddingTop: "80px" }}>
          <p>Featured Invention </p>
        </Whybox>
        <Wrappercard2>
          <Child2>
            <img src="./images/SwiftXR 2.png" alt="headset" />
            <h4>Headset</h4>
            <div
              style={{
                display: "flex",
                paddingLeft: "2px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                color: "#3A4F5C",
              }}
            >
              <P2 style={{ color: "#3A4F5C" }}>
                Easy device connection Max. 30 hrs battery life
              </P2>
              <Button>View</Button>
            </div>
          </Child2>
          <Child2>
            <img src="./images/Ride.png" alt="" />
            <h4>Bicycles - 26 inches Adult big size tyre bicycle</h4>
            <div
              style={{
                display: "flex",
                paddingLeft: "2px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <P2 style={{ color: "#3A4F5C" }}>
                6061 aluminum frame and fork provide a smooth, stable ride
                Mechanical disc brakes offer excellent...
              </P2>
              <Button>View</Button>
            </div>
          </Child2>
          <Child2>
            <img src="./images/mouse.png" alt="" />
            <h4>Mouse - Easy to use Wireless optical mouse</h4>
            <div
              style={{
                display: "flex",
                paddingLeft: "2px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <P2 style={{ color: "#3A4F5C" }}>
                Quiet tactile clicking, Long-lasting battery life, Customizable
                seven-button inputs
              </P2>
              <Button>View</Button>
            </div>
          </Child2>
        </Wrappercard2>
        <Buttondiv
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button>View All Inventions</Button>
        </Buttondiv>
        <Testimonials />
        <Thirdprompt3>
          <Whybox style={{ flexDirection: "column", gap: "20px" }}>
            {" "}
            <div>
              <p>Frequently asked questions (FAQs)</p>
            </div>
            <Faq />
          </Whybox>
        </Thirdprompt3>
        <Newsletter />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Landing;
