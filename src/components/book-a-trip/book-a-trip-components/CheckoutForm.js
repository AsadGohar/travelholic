import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ stripe, elements }) => {
    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
        }
    };

    const CARD_ELEMENT_OPTIONS = {
        style: {
          base: {
            color: "#303238",
            fontSize: "16px",
            fontFamily: "sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": {
              color: "#CFD7DF"
            }
          },
          invalid: {
            color: "#e5424d",
            ":focus": {
              color: "#303238"
            }
          }
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Card details
                </label>
                <CardElement options={CARD_ELEMENT_OPTIONS} />

                <button disabled={!stripe} className="btn-pay">
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}