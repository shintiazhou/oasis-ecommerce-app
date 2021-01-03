import styled from "styled-components"
import { motion } from "framer-motion"
const CollectionItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 450px;
    align-items: center;
    position: relative;
    
    .img-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    position: relative;
    margin:20px 5px;
    overflow: hidden;

    &:hover{
        .img{
            -ms-transform:scale(1.2);
            -webkit-transform:scale(1.2);
            transform:scale(1.2);
        }
        .overlay{
            opacity:1;
            filter:alpha(opacity=100);
        }
        p,button{
            opacity:1;
            filter:alpha(opacity=100);
            -ms-transform:translatey(0);
            -webkit-transform:translatey(0);
            transform:translatey(0);
        }
        button{
            -webkit-transition-delay:.15s;
            transition-delay:.15s;
            
        }
    }
    p{
        color:white;
        text-align:center;
        position:relative;
        font-size:17px;
        -webkit-transform:translatey(-100px);
        -ms-transform:translatey(-100px);
        transform:translatey(-100px);
        -webkit-transition:all .2s ease-in-out;
        transition:all .2s ease-in-out;
        padding:10px;
    }
    .overlay {
        width:100%;
        height:100%;
        position:absolute;
        overflow:hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top:0;
        left:0;
        opacity:0;
        background-color:rgba(68,132,135,0.5);
        -webkit-transition:all .4s ease-in-out;
        transition:all .4s ease-in-out
    }
    .img {
        width: 100%;
        height: 95%;
        background-size: cover;
        background-position: center;
        margin-bottom: 5px;
        -webkit-transition:all .4s linear;
        transition:all .4s linear;
    }
    button {
        outline:none;
        text-decoration:none;
        display:inline-block;
        text-transform:uppercase;
        color:#fff;
        border:1px solid #fff;
        background-color:transparent;
        opacity:0;
        filter:alpha(opacity=0);
        -webkit-transition:all .2s ease-in-out;
        transition:all .2s ease-in-out;
        margin:50px 0 0;
        padding:7px 14px;
        &:hover{
            box-shadow:0 0 5px #fff;
        }
        &:active{
            transform:scale(1.2);
            transition:0.1s;
        }
    }

    }
    .collection-footer {
        width: 100%;
        height: 5%;
        display: flex;
        flex-direction:column;
        align-items:center;
        font-size: 18px;
        margin-bottom:50px;
        text-align:center;
        .name{
            font-weight:bold;
            margin-bottom:3px;
        }
        .price{
            padding:5px 7px 5px 5px;
            border-bottom:2px solid #b07b58;
        }
    }
    @media(max-width:700px){
        height:300px;
    }
`
export default CollectionItem