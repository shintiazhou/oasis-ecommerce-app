import styled, { css } from "styled-components"

const CustomButton = styled.button`
    letter-spacing:3px;
    background-color: #ffffff; 
    border: 2px solid #448487;
    color: #448487;
    padding: 10px 30px;
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

    ${props => props.google && css`
        color:#4285f4;
        border: 2px solid #4285f4;
        &:hover{
            background-color:#4285f4; 
            color:white;
        }
`}
`
export default CustomButton