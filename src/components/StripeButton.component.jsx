import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_tlMzvWD4Onft9wL8n7jVvpnT00YtlNkorw";
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="StyleIt"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/K0J.svg'
      description={`Your Total Price is : $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;