import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Button1 } from "../pages/Landing";

const Container = styled.div`
  height: 60px;
  position: fixed;
  width: 100vw;
  z-index: 40;
  top: 0;
  padding-bottom: 87px;
  Link {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: ${({ currentUser }) => (currentUser !== null ? "flex" : "none")};
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  gap: 8px;
  padding: 15px;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    padding: 10px;
    width: 100vw;
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
  width: 50%;
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
  gap: 15px;
  width: 20%;

  img {
    object-fit: cover;
    height: 30px;
    width: 30px;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: 64px;
  object-fit: cover;
  padding-left: 15px;
  @media only screen and (max-width: 500px) {
    width: 180px;
    padding-left: 0;
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
  /* ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d1cfcf;
  } */
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

export const Button = styled.button`
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
  /* border-radius: 10px; */
  background: #f2f2f2;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);
  width: 100px;
  top: ${({ navbar }) => (navbar ? "100px" : "70px")};
  opacity: ${({ navbar }) => (navbar ? "1" : "0")};
  transition: 450ms;
  right: 160px;
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    Link {
      &:hover {
        color: #ffffff;
      }
    }
    li {
      padding: 10px;
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
  width: 100%;
`;

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [navbar, setNavBar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    // document.body.style.overflow = sidebar ? "visible" : "hidden";
  };

  const toggleNav = () => {
    setNavBar(!navbar);
  };
  useEffect(() => {
    const hideSidebar = () => {
      if (sidebar) {
        setSidebar(false);
      }
    };

    window.addEventListener("beforeunload", hideSidebar);

    return () => {
      window.removeEventListener("beforeunload", hideSidebar);
    };
  }, [sidebar]);

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
            to="/Upload"
            style={{ textDecoration: "none", color: "#3A4F5C" }}
          >
            {" "}
            <p>Upload</p>
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
          {/* <img src="./images/Vector.png" alt="search" /> */}
          <img onClick={toggleNav} src="./images/vertical.png" alt="menu" />

          <UserModal navbar={navbar}>
            <ul>
              {" "}
              <li>
                <Link
                  to="/Profile"
                  style={{ textDecoration: "none", color: "#3a4f5c" }}
                >
                  Profile
                </Link>
              </li>
              <li onClick={handleSignOut}>Log out</li>
            </ul>
          </UserModal>
          {currentUser ? (
            <Link to="/Upload" style={{ textDecoration: "none" }}>
              {" "}
              <Button>Upload</Button>{" "}
            </Link>
          ) : (
            <Link to="/Path" style={{ textDecoration: "none" }}>
              {" "}
              <Button>Sign Up</Button>{" "}
            </Link>
          )}
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
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
                sidebar={sidebar}
                onClick={showSidebar}
              >
                <p>Home</p>
              </Link>
              <Link
                to="/Explore"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
                sidebar={sidebar}
                onClick={showSidebar}
              >
                {" "}
                <p>Explore</p>
              </Link>
              <Link
                to="/Upload"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
              >
                {" "}
                <p>Upload</p>
              </Link>
              <Link
                to="/Inventors"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
                sidebar={sidebar}
                onClick={showSidebar}
              >
                <p>Inventors</p>
              </Link>
              <Link
                to="/Investors"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
                sidebar={sidebar}
                onClick={showSidebar}
              >
                <p>Investors</p>
              </Link>
              <Link
                to="/About"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
                sidebar={sidebar}
                onClick={showSidebar}
              >
                {" "}
                <p>About Us</p>
              </Link>
              <Link
                to="/Profile"
                style={{ textDecoration: "none", color: "#3A4F5C" }}
                sidebar={sidebar}
                onClick={showSidebar}
              >
                {" "}
                <p>View Profile</p>
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
                sidebar={sidebar}
                onClick={showSidebar}
              >
                Settings
              </Button1>

              <Button
                style={{ width: "70%", height: "45px" }}
                onClick={handleSignOut}
              >
                Log-out
              </Button>
            </Sidebarbuttons>
          </SidebarWrap>
        </SidebarNav>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
