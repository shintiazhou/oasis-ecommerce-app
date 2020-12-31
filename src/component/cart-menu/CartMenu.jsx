import React from "react"
import CartMenu from "./cart-menu-style"
import { selectCartHidden, selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import CartItem from "../cart-item/CartItem"
import CustomButton from "../custom-button/CustomButton"
import StripeButton from "../stripe-button/StripeButton"
const CartMenuComponent = () => {
    const dispatch = useDispatch()
    const hidden = useSelector(state => selectCartHidden(state))
    const total = useSelector(state => selectCartTotal(state))
    const cartItems = useSelector(state => selectCartItems(state))
    return <CartMenu
        itemListElement="div"
        right
        customCrossIcon={false}
        width={"400px"}
        pageWrapId={"page-wrap"} outerContainerId={"outer-container"}
        customBurgerIcon={false}
        isOpen={!hidden}
        onClose={() => dispatch(toggleCartHidden())}
    >
        <div className="container">
            <span className="arrow"
                onClick={() => dispatch(toggleCartHidden())}
            >&larr;</span>
            <h2 className="title">YOUR CART</h2>
            <div className="cart-items">
                {cartItems.length ?
                    <div className="item">
                        {cartItems.map(item => <CartItem key={item.id} object={item} />)}
                    </div> :

                    <span className="empty-message" >Nothing in your cart.</span>}
            </div>
            <div className="checkout">
                <div className="subtotal">
                    <span>Subtotal</span>
                    <span>$ {total}</span>
                </div>
                <div className="tax">
                    <span>Tax</span>
                    <span>-</span>
                </div>
                <div className="total">
                    <span>Total</span>
                    <span>$ {total}</span>
                </div>
                <StripeButton price={total} >
                </StripeButton>
                <div className="test-warning">
                    *please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 -Exp: 12/21 -CVC:123
                </div>
            </div>
        </div>
    </CartMenu >
}
export default CartMenuComponent