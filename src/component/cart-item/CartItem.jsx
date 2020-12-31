import React from "react"
import CartItem from "./cart-item-style"
import { useDispatch } from "react-redux"
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions"


const CartItemComponent = (props) => {
    const dispatch = useDispatch()
    return <CartItem>
        <img src={props.object.imageUrl}
            alt={props.object.name} />

        <div className="detail">
            <div className="upper">
                <h3 className="name">{props.object.name}
                </h3>
                <span className="description">
                    Lorem ipsum dolor sit amet.
                </span>
                <span className="price">$ {props.object.price * props.object.quantity}</span>
            </div>
            <div className="lower">
                <span className="clear"
                    onClick={() => dispatch(clearItem(props.object))}
                >REMOVE</span>
                <span
                    className="option"
                    onClick={() => dispatch(removeItem(props.object))}
                >-</span>
                <span className="quantity">{props.object.quantity}</span>
                <span className="option"
                    onClick={() => dispatch(addItem(props.object))}
                >+</span>

            </div>

        </div>

    </CartItem>
}
export default CartItemComponent