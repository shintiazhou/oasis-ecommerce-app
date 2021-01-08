import styled from "styled-components"
import { motion } from "framer-motion"

export const LandingPageCover = styled(motion.div)`
    margin:0 auto;
    display:flex;
    background-size:cover;
    background-repeat:no-repeat;
    width: 100vw;
    height:50vw;
    justify-content:flex-end;
    @media(max-width:1014px){
        height:80vw;
    }

`
export const Caption = styled(motion.div)`
    width:470px;
    font-weight:bolder;
    font-size:1.5em;
    font-style:italic;
    letter-spacing:2px;
    margin-right:2vw;
    color:#214142;
    align-self:center;
    @media(max-width:1014px){
        font-size:100%;
        width:300px;
        margin-right:4vw;
    }
    @media(max-width:700px){
        margin-top:50px;
        font-size:70%;
        width:200px;
        margin-right:4vw;
    }
`
export const Button = styled.span`
    top:50px;
    background: #214142;
    color: #ffffff;
    cursor: pointer;
    font-size: 0.5em;
    padding: 20px;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    position: relative;

    &::after {
        content: ">";
        font-family:sans-serif;
        font-weight: 800;
        position: absolute;
        left: 85%;
        top: 38%;
        right: 5%;
        bottom: 0;
        opacity: 0;
    }
    &:hover {
        background: #214142;
        transition: all 0.5s;
        border-radius: 10px;
        box-shadow: 0px 6px 15px #0000ff61;
        padding: 1.5rem 3.5rem 1.5rem 1.5rem;

        &::after {
            opacity: 1;
            transition: all 0.5s;
        }
    }
    @media(max-width:1014px){
        padding:1.5em;
        top:20px;
        &:hover{
            padding:2em 3em 2em 2em;
        }
        
    }
    
`
