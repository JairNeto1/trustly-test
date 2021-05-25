import { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { Form } from "./styles";

import ActionButton from "../../components/ActionButton/index";

import Banks from "../../assets/banks.png";
import Cards from "../../assets/cards.png";
import ApplePay from "../../assets/applePay.png";

export default function PaymentOptions({ product }) {
  const [paymentMethod, setPaymentMethod] = useState("online-banking");
  const history = useHistory();

  const getPaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePanelListener = () => {
    // eslint-disable-next-line no-undef
    PayWithMyBank.addPanelListener(function (command, event) {
      if (command === "event" && event.type === "new_location") {
        if (event.data.indexOf("#success") === 0) {
          history.push("/confirmation");
        } else {
          alert("Payment unsuccessful!");
        }
        return false;
      }
    });
  };

  const handlePaymentMethod = () => {
    switch (paymentMethod) {
      case "online-banking":
        try {
          // eslint-disable-next-line no-undef
          PayWithMyBank.establish({
            accessId: "XzHpRUr7RF75hg9nC5x2",
            merchantId: "1012523953",
            metadata: { demo: "enabled" },
            currency: "USD",
            paymentType: "Deferred",
            amount: product.price,
            description: "Shoes.on",
            merchantReference: "c267e818-1f1e-11eb-adc1-0242ac120002",
            returnUrl: "#success",
            cancelUrl: "#cancel",
          });
        } catch (error) {
          throw error;
        }
        break;

      case "card-payment":
        alert("Oops... It looks like we're still working on that. ");
        break;

      case "apple-pay":
        alert("Oops... It looks like we're still working on that. ");
        break;

      default:
        alert("Please, select a payment method");
    }
  };

  const storeProduct = () => {
    localStorage.setItem("product", JSON.stringify(product));
  };

  const callers = () => {
    if (paymentMethod === "online-banking") handlePanelListener();
    handlePaymentMethod();
    storeProduct();
  };

  return (
    <Form>
      <section onClick={getPaymentMethod}>
        <input
          type="radio"
          name="payment-method"
          id="online-banking"
          value="online-banking"
          defaultChecked
        />
        <label htmlFor="online-banking">Online Banking</label>
        <span>Save $10</span>
        <img src={Banks} alt="Banks available for online banking" />
      </section>

      <section onClick={getPaymentMethod}>
        <input
          type="radio"
          name="payment-method"
          id="card-payment"
          value="card-payment"
        />
        <label htmlFor="card-payment">Card Payment</label>
        <img src={Cards} alt="Cards available for card payment" />
      </section>

      <section onClick={getPaymentMethod}>
        <input
          type="radio"
          name="payment-method"
          id="apple-pay"
          value="apple-pay"
        />
        <label htmlFor="apple-pay">Apple Pay</label>
        <img src={ApplePay} alt="Apple Pay" />
      </section>

      <ActionButton fn={callers} text="Continue" />
    </Form>
  );
}

PaymentOptions.propTypes = {
  product: PropTypes.object.isRequired,
};
