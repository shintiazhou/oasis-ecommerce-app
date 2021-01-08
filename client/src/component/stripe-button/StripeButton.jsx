import React from "react"
import { useDispatch } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { clearCart } from "../../redux/cart/cart.actions"
import axios from "axios"

const StripeButton = (props) => {
    const priceForStripe = props.price * 100;
    const PublishableKey = "pk_test_51HxTfhFmqfwYKSv9hlabBXnGIJK6SRgS5NXt5ahnekuxJngKCks3SLAtJNg032pKZ13qTqLR4suw1DEjJV59yGCV00kYOhWWjY"
    const dispatch = useDispatch()

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('succesful payment');
                dispatch(clearCart())
            })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });

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