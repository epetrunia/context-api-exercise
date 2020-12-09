import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hr0BBHHs9Gl9GPhrM3btiAxkqm6RwYmotYYqcHHSjT9YEU3FFS2XrPVincqkYNTBKpNTk9op5P9jZcq9aZ57jIH008P1xHNHO';
  const onToken = (token) => {
    console.log(token);
    alert('Successful payment');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
