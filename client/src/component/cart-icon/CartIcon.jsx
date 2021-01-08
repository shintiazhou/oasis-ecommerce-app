import React from "react"
import CartIcon from "./cart-icon-style"
import { ReactComponent as Icon } from "../../assets/cart.svg"
import { useDispatch } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"
import { useSelector } from "react-redux"

const CartIconComponent = () => {
    const itemCount = useSelector(state => selectCartItemsCount(state))
    const dispatch = useDispatch()

    return <CartIcon
        onClick={() => dispatch(toggleCartHidden())} >
        <Icon className="icon" />
        <span className="item-count"
            style={{
                bottom: itemCount < 10 && "25px",
                right: itemCount < 10 && "11px",
            }}
        >
            {itemCount}
        </span>
    </CartIcon>
}
export default CartIconComponent