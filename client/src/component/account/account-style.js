import styled from "styled-components"


const Account = styled.div`
    .subheading{
        margin:30px 0;
        padding-bottom:5px;
        display:flex;
        align-items:flex-end;
        justify-content:space-between;
        border-bottom:2px solid #214142;
        .account-info{
            font-size:1.4em;
            font-weight:bolder;
        }
        .log-out{
            transition-duration: 0.4s;
            cursor:pointer;
            &:hover{
                color:#b07b58;
                transform:scale(1.2);
            }
        }
    }
    .container{
        text-align:left;
        display:block;
        font-weight:bolder;
        .info{
            margin:50px;
            font-weight:lighter;
        }
        .option{
            margin:10px 30px;
        }
    }
`

export default Account