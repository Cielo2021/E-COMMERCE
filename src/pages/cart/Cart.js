import { useContext, useState } from "react";
import { Cartcontext } from "../../context/Context";
import { Link } from "react-router-dom"; // Import Link
import "./Cart.css";

export const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckout = () => {
    // Logic for handling checkout (not implemented)
    // Set the state to show message
    setShowMessage(true);
  };

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.quantity * item.price}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}
              >
                -
              </button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
          <h2>Total: {total}</h2>
          <Link to="/cart"> {/* Use Link for checkout button */}
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </Link>
        </div>
      )}
      {showMessage && (
        <div className="message-container">
          <p className="message">Thanks for Shopping at the FakeStore!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
