import styled from "styled-components"
import { slide as Menu } from 'react-burger-menu'

const CartDropdown = styled(Menu)`
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
        .title{
            outline:none;
            border:none;
            padding:10px;
            margin-bottom:80px;
            border-bottom:2px solid white;
        }
    }

`

export default CartDropdown