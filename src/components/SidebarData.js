import React from 'react'



export const SidebarData = [
    {
        title: "Features",
        path: '#',
        iconClosed: <img src="./images/down.png" alt="down" />,
        iconOpened: <img src="./images/up.png" alt="up" />,
        subNav:[
            {
                title: "Todo List",
                icon: "./images/down.png"
            },

            {
                title: "Calender",
                icon: "./images/down.png"
            },
            
            {
                title: "Reminder",
                icon: "./images/down.png"
            },
            
            {
                title: "Planning",
                icon: "./images/down.png"
            },
        ]
    },
    {
        title: "Company",
        iconClosed: <img src="./images/down.png" alt="down" />,
        iconOpened: <img src="./images/down.png" alt="up" />,
        subNav: [
            {
                title: "History",
               
                
            },
            {
                title: "Our Team",
                
                
            },
            {
                title: "Blog",
         
                
            },
            
           
        ]
    },

    {
        title: 'Careers',
       

    },
    {
        title: 'About',
 
    },
    
]