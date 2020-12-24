import styled from "styled-components"

const CustomButton = styled.button`
    position: relative;
    height:55px;
    padding: 1em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 1em 0.8em;
    color:black;

    ::after,::before{
        content: '';
        display: block;
        position: absolute;
        width: 20%;
        height: 20%;
        border: 2px solid;
        transition: all 0.6s ease;
        border-radius: 2px;
    }
    ::after{
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: black;
        border-right-color: black;
    }
    ::before{
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: black;
        border-left-color: black;
    }
    :hover:before,:hover:after{
        width: 100%;
        height: 100%;
    }
`
export default CustomButton