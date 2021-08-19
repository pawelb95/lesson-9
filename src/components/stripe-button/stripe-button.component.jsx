import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JQ8HyLZjFjF32NrX3wf4e5BFFcWn162GLY73O4uyQA0MlzMPEwtyVsaarKOdPrsCNUSIIEcbQrw7VSfYhZ3GuHL00yoaXsHrT";

    const onToken = token => {
        console.log(token)
        alert("Payment probably succedful")
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;