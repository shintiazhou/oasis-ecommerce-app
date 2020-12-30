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
    
    .logo-container{
        cursor:pointer;
        padding-right:4%;
    }
    .option{
        cursor:pointer;
    }
    .left{
        margin-left:200px;
        .option{
            margin-left:50px;
        }
    }
    .right{
        margin-right:200px;
        display:flex;
        align-items:center;
            .option{
            margin-right:50px;
        }
    }

`
export default Header