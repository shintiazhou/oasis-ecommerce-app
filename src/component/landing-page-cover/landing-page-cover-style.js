import styled from "styled-components"
import { motion } from "framer-motion"

export const LandingPageCover = styled(motion.div)`
    background-image:url(https://i.ibb.co/6vq7wyv/landing-page.jpg);
    margin:0 auto;
    margin-top:20px;
    display:flex;
    background-size:cover;
    background-repeat:no-repeat;
    width: 100%;
    height:700px;
    justify-content:flex-end;
    border-bottom:2px solid #17393B;
`
export const Title = styled(motion.h1)`
    width:500px;
    letter-spacing:2px;
    margin-right:100px;
    color:white;
    align-self:center;
    ::before{
        content:'" '
    }
    ::after{
        content:' "'
    }
`


