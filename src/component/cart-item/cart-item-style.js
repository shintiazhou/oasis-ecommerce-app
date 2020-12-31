import styled from "styled-components"

const CartItem = styled.div`
    width: 100%;
    font-size:15px;
    display: flex;
    height: 100px;
    padding-bottom:20px;
    margin-bottom: 20px;
    text-align:center;
    border-bottom:2px solid white;
    img {
        width: 80px;
        height:90px;
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
        margin-top:48px;
        margin-bottom:30px;
        .name{
            font-weight:normal;
            text-transform:uppercase;
            letter-spacing:2px;
            margin-bottom:5px;
            font-size:14px;
        }
        .description{
            font-weight:100;
            letter-spacing:1px;
            font-size:10px;
        }
        .price{
            position:absolute;
            top:0;
            right:0;
            font-size:12px;
        }
    }
    .lower{
        width:50%;
        font-size:12px;
        margin-bottom:40px;
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