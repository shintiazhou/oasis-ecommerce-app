import styled from "styled-components"

const CustomButton = styled.button`
    letter-spacing:3px;
    background-color: #ffffff; 
    border: 2px solid #448487;
    color: #448487;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    outline:none;
    &:hover{
        background-color: #448487;
        color: white;
    }
    &:active{
        box-shadow:0px 0px 15px 1px white; 
        transition-duration: 0.1s;
    }

`
export default CustomButton