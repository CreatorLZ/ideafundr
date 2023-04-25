import styled from "styled-components"

export const Wrapper = styled.div`
height: 100%;
width: 45%;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5px 10px;
 input {
    display: flex;
flex-direction: row;
align-items: center;
margin-bottom:30px;
padding: 12px 24px;
gap: 4px;
width: 550px;
height: 56px;
border: 0.2px solid #8095A2;
border-radius: 4px;
    :focus{
        outline: 2px solid  #8095A3;
    }
    
}
p{
    margin-top: 20px;
    font-size: 14px;
    color:  #8095A2;
}
form{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
     img{
    width: 30px;
    height: 30px;
    cursor: pointer;
    }
    label{
        display: flex;
        align-items: center;
        gap: 10px;
        color:  #8095A2;
        font-size: 12px;
        cursor: pointer;
    }
}
hr{
    width:80%;
}
`

