import styled from "styled-components"

const CartItem = styled.div`
    width: 100%;
    font-size:10px;
    display: flex;
    height: 100px;
    padding-bottom:10px;
    margin-bottom: 20px;
    text-align:center;
    border-bottom:2px solid white;
    img {
        width: 60px;
        height:80px;
    }
    .detail{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px;
        text-align:left;
    }
    .upper{
        width:100%;
        display:block;
        position:relative;
        .name{
            width:100px;
            font-weight:normal;
            text-transform:uppercase;
            letter-spacing:2px;
            margin-bottom:5px;
            font-size:10px;
        }
        .description{
            font-weight:100;
            letter-spacing:1px;
            font-size:10px;
        }
        .price{
            position:absolute;
            top:0;
            right:-10px;
            font-size:10px;
        }
    }
    .lower{
        width:50%;
        font-size:10px;
        margin-top:20px;
        display:flex;
        justify-content:space-between;
        .clear{
            cursor:pointer;
        }
        .option{
            cursor:pointer;
            margin:0 15px;
        }
    }
`
export default CartItem