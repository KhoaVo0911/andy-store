// PayPalButton.js
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

const PayPalCheckout = ({ totalAmount }) => {
  const onSuccess = (details, data) => {
    alert("Transaction completed by " + details.payer.name.given_name);

    // You can handle the successful payment here, e.g., save the order to your server
    // Don't forget to make a server call to confirm the payment.

    // Optional: You can add additional logic here, like showing a success message to the user.
  };

  return (
    <PayPalButton
      amount={totalAmount}
      onSuccess={onSuccess}
    />
  );
};

export default PayPalCheckout;
