import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;


  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    padding: 12px 24px;
    gap: 4px;
    width: 80%;
    border: 0.2px solid #8095a2;
    border-radius: 4px;
    :focus {
      outline: 1px solid #8095a3;
    }
  }
  p {
    margin-top: 20px;
    font-size: 14px;
    color: #8095a2;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 5px;
    gap: 5px;
    justify-content: center;
    align-items: flex-start;
    select{
      padding: 10px;
      border: 0.2px solid #8095a2;
      :focus {
      outline: 1px solid #8095a3;
    }
    }
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    label {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #8095a2;
      padding: 5px;
      font-size: 14px;
      cursor: pointer;
    }
  }
  hr {
    width: 80%;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 100%;
    margin-bottom: 40px;
    form{
      gap: 10px;
    }
  }
`;

export const Buttondiv = styled.div`
display: none;
background: transparent;
margin: 0;
@media only screen and (max-width: 1000px) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
 position: fixed;
 bottom: 0;
 padding: 15px;
 padding-left: 0px;
  width: 100%;
  gap: 8px;
}
`