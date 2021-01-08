import styled from "styled-components"

const SignIn = styled.div`
    width:30vw;
    height:100%;
    margin:0 auto;
    h1{
        margin-bottom:60px;
    }
    .buttons{
        display:flex;
        flex-direction:column;
    }
    div,span{
        margin:15px 5px;
    }
    .sign-up{
        color:#b07b58;
        cursor:pointer;
        padding-bottom:5px;
        border-bottom:2px solid #b07b58;
    }
    @media(max-width:400px){
        width:80vw;
        div{
            display:flex;
            flex-direction:column;
        }
    }
`

export default SignIn