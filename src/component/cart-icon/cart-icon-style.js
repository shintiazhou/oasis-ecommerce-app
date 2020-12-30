import styled from "styled-components"

const CartIcon = styled.div`
    width: 45px;
    cursor:pointer;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #214142;
    .icon {
        width: 35px;
    }
    .item-count {
        position: absolute;
        font-size: 10px;
        font-weight:lighter;
        bottom: 24px;
        right:9px;
        text-align:center;
        color:white;
    }
`
export default CartIcon