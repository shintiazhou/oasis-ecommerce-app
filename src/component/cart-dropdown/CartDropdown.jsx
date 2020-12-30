import React from "react"
import CartDropdown from "./cart-dropdown-style"
import { selectCartHidden, selectCartItems } from "../../redux/cart/cart.selectors"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import CartItem from "../cart-item/CartItem"

const CartDropdownComponent = () => {
    const dispatch = useDispatch()
    const hidden = useSelector(state => selectCartHidden(state))
    const cartItems = useSelector(state => selectCartItems(state))
    return <CartDropdown
        itemListElement="div"
        right
        width={"700px"}
        crossButtonClassName={"cross-button"}
        pageWrapId={"page-wrap"} outerContainerId={"outer-container"}
        customBurgerIcon={false}
        isOpen={!hidden}
        onClose={() => dispatch(toggleCartHidden())}
    >
        <div className="container">
            <h2 className="title">YOUR CART</h2>
            <div className="cart-items">
                {cartItems.length ?
                    <div className="items">
                        {cartItems.map(item => <CartItem key={item.id} object={item} />)}
                    </div> :

                    <span className="empty-message" >Nothing in your cart.</span>}
            </div>
        </div>

    </CartDropdown >
}
export default CartDropdownComponent