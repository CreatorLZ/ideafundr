import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Button1 } from "../pages/Landing";

const Container = styled.div`
  height: 60px;
  padding-bottom: 87px;
  Link {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  gap: 8px;
  padding: 15px 87px;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
  @media only screen and (max-width: 500px) {
    padding: 15px;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 576px;
  line-height: 33px;

  p {
    font-weight: 400;
    font-size: 24px;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 32px;

  img {
    object-fit: cover;
    height: 20px;
    width: 20px;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 183px;
  height: 64px;
  object-fit: cover;
  @media only screen and (max-width: 500px) {
    width: 180px;
  }
`;
const Hamburger = styled.img`
  display: none;
  height: 40px;
  width: 40px;
  @media only screen and (max-width: 500px) {
    display: flex;
  }
`;
const SidebarNav = styled.nav`
  background-color: hsl(0, 0%, 98.0392156862745%);
  width: 400px;
  height: 100vh;
  display: none;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 650ms;
  z-index: 75;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 500px) {
    width: 300px;
    display: flex;
  }
`;
const Adjust = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  margin-bottom: 50px;
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d1cfcf;
  }
`;
const Sidebarbuttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  z-index: 60;
  display: none;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 650ms;
  @media only screen and (max-width: 500px) {
    display: flex;
  }
`;

const Button = styled.button`
  padding: 16px 32px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00806e;
  color: #fefefe;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    transition: 250ms;
    background-color: white;
    color: #00806e;
  }
  :focus {
    outline: none;
  }
`;

const UserModal = styled.div`
  position: absolute;
  padding: ${({ navbar }) => (navbar ? "5px 5px" : "0px 0px")};
  border-radius: 10px;
  background: #f5f5f5;
  top: ${({ navbar }) => (navbar ? "80px" : "70px")};
  opacity: ${({ navbar }) => (navbar ? "1" : "0")};
  transition: 450ms;
  right: 10px;
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    width: 100%;
    padding: 10px;
    li {
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      color: #3a4f5c;
      :hover {
        background: #00806e;
        color: #ffffff;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
const Siderbarlinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  p {
    font-weight: 400;
  }
  Link {
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-left: 4px solid #deba50;
      cursor: pointer;
    }
  }
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { currentUser } = useContext(AuthContext);
  const [navbar, setNavBar] = useState(false);

  const toggleNav = () => {
    setNavBar(!navbar);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("User has logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          {" "}
          <Logo src="./images/Logo.png" alt="Logo" />
        </Link>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "#3A4F5C" }}>
            <p>Home</p>
          </Link>
          <Link
            to="/Explore"
            style={{ textDecoration: "none", color: "#3A4F5C" }}
          >
            {" "}
            <p>Explore</p>
          </Link>
          <Link
            to="/Inventors"
            style={{ textDecoration: "none", color: "#3A4F5C" }}
          >
            <p>Inventors</p>
          </Link>
          <Link
            to="/Investors"
            style={{ textDecoration: "none", color: "#3A4F5C" }}
          >
            <p>Investors</p>
          </Link>
          <Link
            to="/About"
            style={{ textDecoration: "none", color: "#3A4F5C" }}
          >
            {" "}
            <p>About Us</p>
          </Link>
        </Center>
        <Right>
          <img src="./images/Vector.png" alt="search" />
          {currentUser ? (
            <Button onClick={handleSignOut}>Log out</Button>
          ) : (
            <Link to="/Landing" style={{ textDecoration: "none" }}>
              {" "}
              <Button>Sign Up</Button>{" "}
            </Link>
          )}
          <img onClick={toggleNav} src="./images/menuicon.png" alt="menu" />

          <UserModal navbar={navbar}>
            <ul>
              <Link to="/Profile" style={{ textDecoration: "none" }}>
                {" "}
                <li>Profile</li>
              </Link>
              <li onClick={handleSignOut}>Log out</li>
            </ul>
          </UserModal>
        </Right>
        <Overlay sidebar={sidebar} onClick={showSidebar} />
        <Hamburger onClick={showSidebar} src="./images/menu.png" alt="menu" />
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <Adjust
              src="./images/close.png"
              alt="close"
              onClick={showSidebar}
            />
            <Siderbarlinks>
              <Link to="/" style={{ textDecoration: "none", color: "#3A4F5C" }}>
                <p>Home</p>
              </Link>
              <Link
                to="/Explore"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
              >
                {" "}
                <p>Explore</p>
              </Link>
              <Link
                to="/Inventors"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
              >
                <p>Inventors</p>
              </Link>
              <Link
                to="/Investors"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
              >
                <p>Investors</p>
              </Link>
              <Link
                to="/About"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
              >
                {" "}
                <p>About Us</p>
              </Link>
            </Siderbarlinks>
            <Sidebarbuttons>
              <Button1
                style={{
                  marginTop: "50px",
                  border: "none",
                  width: "70%",
                  height: "45px",
                }}
              >
                Profile
              </Button1>
              <Button style={{ width: "70%", height: "45px" }}>Log-out</Button>
            </Sidebarbuttons>
          </SidebarWrap>
        </SidebarNav>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
