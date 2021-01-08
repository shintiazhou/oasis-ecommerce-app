import styled from "styled-components"

const Footer = styled.div`
    padding:50px;
    width:100%;
    flex-direction:column;
    display:flex;
    height:270px;
    color:white;
    background-color:#214142;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    .icons{
        display:flex;
        flex-direction:row;
        width:150px;
        justify-content:space-between;
        div{
            cursor:pointer;
        }
    }
    .description{
        font-size:0.8em;
    }
`
export default Footer