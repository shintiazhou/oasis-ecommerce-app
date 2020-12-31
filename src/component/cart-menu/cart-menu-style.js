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
        padding-bottom:380px;
        .arrow{
            position:absolute;
            cursor:pointer;
            font-size:2.5em;
            top:0;
            right:330px;
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
            left: auto;
            top: auto;
            height:300px;
            padding: 24px;
            width: 320px;
            background-color: #214142;
            z-index: 3;
            .subtotal,.tax,.total{
                display:flex;
                justify-content:space-between;
                margin:5px 0;
                font-weight:lighter;
            }
            .tax{
                border-bottom:2px solid white;
                padding-bottom:20px ;
                margin-bottom:20px;
            }
            .total{
                margin-bottom:20px;
            }
            button{
                letter-spacing:4px;
                height:2.5em;
                margin-bottom:15px;
            }
            .test-warning{
                background-color:red;
                padding:3px;
            }
        }
    }

`

export default CartMenu