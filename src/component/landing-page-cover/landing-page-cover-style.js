import styled from "styled-components"
import { motion } from "framer-motion"

export const LandingPageCover = styled(motion.div)`
    margin:0 auto;
    display:flex;
    background-size:cover;
    background-repeat:no-repeat;
    width: 100%;
    height:700px;
    justify-content:flex-end;

    .button{
        top:50px;
        background: #214142;
        color: #ffffff;
        cursor: pointer;
        font-size: 1.01em;
        padding: 20px;
        border: 0;
        transition: all 0.5s;
        border-radius: 10px;
        position: relative;

        &::after {
        content: ">";
        font-weight: 400;
        position: absolute;
        left: 85%;
        top: 31%;
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

    }

    .arrow{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        margin-top:230px;
        margin-left:280px;
    }
    .arrow span{
        display: block;
        width: 30px;
        height: 30px;
        border-bottom: 5px solid #06A8FF;
        border-right: 5px solid #06A8FF;
        transform: rotate(45deg);
        margin: -10px;
        animation: animate 2s infinite;
    }
    .arrow span:nth-child(2){
        animation-delay: -0.2s;
    }
    .arrow span:nth-child(3){
        animation-delay: -0.4s;
    }
    @keyframes animate {
        0%{
            opacity: 0;
            transform: rotate(45deg) translate(-20px,-20px);
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
            transform: rotate(45deg) translate(20px,20px);
        }
    }
`
export const Title = styled(motion.h2)`
    width:500px;
    font-weight:bolder;
    font-size:2em;
    font-style:italic;
    letter-spacing:2px;
    margin-right:100px;
    color:#214142;
    align-self:center;

`
