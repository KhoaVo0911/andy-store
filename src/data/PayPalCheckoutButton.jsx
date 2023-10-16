import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckoutButton = (props) => {
    const { product } = props;
    return React.createElement(PayPalButtons, null, null);
};

export default PayPalCheckoutButton;