import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { toast } from 'react-toastify';




const Cart = () => {

  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  };

  const handleCheckout = () => {
    if (paymentMethod === null) {
      // Hiển thị thông báo cho người dùng chọn phương thức thanh toán.
      toast.error("Vui lòng chọn phương thức thanh toán.");
    } else {
      if (paymentMethod === "paypal") {
        <PayPalButton
          amount="0.01"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          }}
        />
      } else if (paymentMethod === "cash") {
        <button type="button" className="button-theme bg-theme-cart text-white" onClick={handleCheckout}>
          Check Out
        </button>
      }
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
          }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
            }`}
        >
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
          {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <div className="payment-method-selection">
                  <label>
                    <input type="radio" name="paymentMethod" value="paypal" onChange={() => setPaymentMethod("paypal")} />
                    Thanh toán bằng PayPal
                  </label>
                  <label>
                    <input type="radio" name="paymentMethod" value="cash" onChange={() => setPaymentMethod("cash")} />
                    Thanh toán bằng tiền mặt
                  </label>
                  {/* {payment === 'paypal' ? (
                    
                  ) : (
                    
                  )} */}
                </div>
                <button type="button" className="button-theme bg-theme-cart text-white" onClick={handleCheckout}>
                  Check Out
                </button>

              </div>
            </div>

          </div>}
        </div>
      </div>
    </>
  );
};

export default Cart;
