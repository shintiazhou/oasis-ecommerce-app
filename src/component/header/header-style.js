import styled from "styled-components"

const Header = styled.div`
    height:70px;
    font-weight:600;
    color:white;
    z-index:100;
    font-size:1.2em;
    width:100%;
    background-color:#448487;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 10%;

    .right, .left{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:38%;
    }
    .right .option{
        margin-left:45px;
    }
    .left .option{
        margin-right:15px;
    }
    @media(max-width:960px){
        font-size:0.7em;
    }
    @media(max-width:500px){
        font-size:0.5em;
        .left, .right{
            width:38%;
        }
        .logo{
            width:30px;
        }
    }

`
export default Header