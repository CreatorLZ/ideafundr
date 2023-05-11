import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
display: none;
  @media only screen and (max-width: 500px) {
      width: 250px;
      height: 100vh;
      background-color: black;
      padding: 20px;
      transition: all 0.3s ease;
      transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
   
}

`;

const SidebarButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  width: 100%;
  text-align: left;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarButton onClick={toggleSidebar}>Toggle Sidebar</SidebarButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarButton>Menu Item 1</SidebarButton>
        <SidebarButton>Menu Item 2</SidebarButton>
        <SidebarButton>Menu Item 3</SidebarButton>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
