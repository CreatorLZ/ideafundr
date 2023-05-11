import React, { useState } from 'react'
import styled from "styled-components";




const Container = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;


`
const SidebarLink = styled.div `
display: flex;
color: black;
align-items: center;
padding: 10px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;
transition: 550ms;


&:hover {
    background: rgba(0, 0, 0, 0.1);
    border-left: 4px solid #DEBA50;
    cursor: pointer;
}
` 
const SidebarLabel = styled.span`
margin-left: 16px;
&:hover {
  transform: scale(1.3);
  border-radius:30% ;
}
`;

const DropdownLink = styled.div `
background: white;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: black;
font-size: 18px;
& :hover {
  background-color: whitesmoke;
  cursor: pointer;
  transform: scale(1.2);
  border-radius: 8px;
  transition: 350ms;
  padding: 10px;
}

`

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
  return (
    <Container>
      <SidebarLink  onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        {item.subNav && subnav
         ? item.iconOpened
         : item.subNav
         ?item.iconClosed
         : null}
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
        return(
          <DropdownLink  key ={index}>
                <img style=
                {{}} src={item.icon} alt="" />
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </Container>
  )
}

export default SubMenu