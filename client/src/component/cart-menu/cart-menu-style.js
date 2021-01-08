import styled from "styled-components"
import { slide as Menu } from 'react-burger-menu'

const CartMenu = styled(Menu)`
    .bm-cross-button {
        height: 50px;
        width: 50px;
    }
    .bm-cross {
        background: #bdc3c7;
    }
    .bm-menu-wrap {
        position: fixed;
        height: 100%;
    }
    .bm-menu {
        background: #214142;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    .bm-morph-shape {
        fill: #214142;
    }

    .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
    }

    .bm-item {
        display: inline-block;
    }

    .bm-overlay {
        background: rgba(255,255,255, 0.3);
    }
    //--------------------------------------------
    .container{
        outline:none;
        text-align:center;
        color:white;
        padding-bottom:220px;
        .empty-message{
            h5{
                font-weight:normal;
                margin-bottom:50px;
            }
            .link{
                color:white;
                padding:5px;
                border-bottom:2px solid #b07b58;
                text-transform:uppercase;
                &:hover{
                    transition-duration:.7s;
                    background-color: #b07b58;
                }
            }
        }
        .arrow{
            position:absolute;
            cursor:pointer;
            font-size:2.5em;
            top:0;
            right:240px;
        }
        .title{
            font-size:18px;
            outline:none;
            border:none;
            padding:10px;
            margin-bottom:50px;
            border-bottom:2px solid white;
        }
        .checkout{
            display:flex;
            flex-direction:column;
            position: absolute;
            bottom: 0;
            font-size:12px;
            font-weight:lighter;
            left:10px;
            top: auto;
            height:240px;
            width: 280px;
            padding:10px;
            background-color: #214142;
            z-index: 3;
            .subtotal,.tax,.total{
                display:flex;
                justify-content:space-between;
                margin:2px 0;
                font-weight:lighter;
            }
            .tax{
                border-bottom:2px solid white;
                padding-bottom:20px ;
                margin-bottom:10px;
            }
            .total{
                margin-bottom:20px;
            }
            button{
                letter-spacing:4px;
                height:2em;
                margin-bottom:15px;
            }
            .test-warning{
                font-size:12px;
                background-color:red;
                padding:3px;
            }
        }
    }

`

export default CartMenu