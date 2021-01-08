import styled from "styled-components"

export const DirectoryMenuItem = styled.div`
    margin-bottom:20px;

    .background{
        display:flex;
        width:100%;
        height:450px;
        background-size:cover;
        background-repeat:no-repeat;
        margin:0 auto;
        position:relative;
        &.left{
            background-position:30% 0;
        }
        &.right{
            background-position:80% 0;
        }
        .content{
            align-self:center;
            margin:0 120px;
            width:400px;
            .title{
                letter-spacing: 3px;
                position: relative;
            }
            .description{
                position: relative;
            }
        }
        @media (max-width: 970px) {
            margin:auto;
            .overlay{
                position:absolute;
                background-color:white;
                top:0;
                left:0;
                opacity:.7;
                width:100%;
                height:100%;
            }
            .content{
                margin:25px;
            }
            &.left{
                background-position:-110px 0;
            }
            &.right{
                background-position:90% 0;
        }
        }
    }
`
export const Button = styled.span`
    top:50px;
    position: relative;
    height:55px;
    padding: 1em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 18px;
    margin: 1em 0.8em;
    color:#B07B58;

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
        border-bottom-color: #B07B58;
        border-right-color: #B07B58;
    }
    ::before{
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: #B07B58;
        border-left-color: #B07B58;
    }
    :hover:before,:hover:after{
        width: 100%;
        height: 100%;
    }
`

