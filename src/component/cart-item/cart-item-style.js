import styled from "styled-components"

const CartItem = styled.div`
    width: 100%;
    display: flex;
    height: 150px;
    margin-bottom: 15px;
    text-align:center;

    img {
        width: 25%;
    }
    .detail{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px 20px;
        text-align:left;
    }
    .upper{
        width:100%;
        display:block;
        position:relative;
        margin-bottom:30px;
        .name{
            font-weight:normal;
            text-transform:uppercase;
            letter-spacing:2px;
            margin-bottom:5px;
        }
        .description{
            font-weight:100;
            letter-spacing:1px;
        }
        .price{
            position:absolute;
            top:0;
            right:0;
        }
    }
    .lower{
        width:50%;
        margin-bottom:10px;
        display:flex;
        justify-content:space-between;
        .clear{
            cursor:pointer;
        }
        .option{
            cursor:pointer;
            font-size:1.1em;
            font-weight:bold;
        }
    }
`
export default CartItem