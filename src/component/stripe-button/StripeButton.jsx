import React from "react"
import { useDispatch } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { clearCart } from "../../redux/cart/cart.actions"

const StripeButton = (props) => {
    const priceForStripe = props.price * 100;
    const PublishableKey = "pk_test_51HxTfhFmqfwYKSv9hlabBXnGIJK6SRgS5NXt5ahnekuxJngKCks3SLAtJNg032pKZ13qTqLR4suw1DEjJV59yGCV00kYOhWWjY"
    const dispatch = useDispatch()
    const onToken = token => {
        console.log(token)
        alert("payment successfull")
        dispatch(clearCart())
    }

    return <StripeCheckout
        name="OASIS clothing Ltd."
        label="CHECK OUT"
        billingAddress
        shippingAddress
        image="https://i.ibb.co/sFYmw2q/oasis-logo.png"
        description={`your total is $${props.price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={PublishableKey}
        panelLabel="pay now"
    />
}
export default StripeButton