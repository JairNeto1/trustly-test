import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Delivery, SubTitle, Review, Payment} from './styles';

import ProductDetails from '../../components/ProductDetails/index';
import CartTotal from '../../components/CartTotal/index';
import PaymentOptions from '../../patterns/PaymentOptions/index';
import ActionButton from '../../components/ActionButton';

import Bank from '../../assets/green-bank.png';

export default function OrderSummary({ page, product }) {
  const history = useHistory();
  const handlePurchase = () => {
    alert("Thank you for your purchase!")
    setTimeout(() => {
      history.push("/")
    }, 5000);
  }
  
  return (
    <>
      {page === "checkout" ? 
        <Container>
          <ProductDetails product={product} />

          <Delivery>
            <h6>Delivery details</h6>
            <p>John Smith</p>
            <span>Phone no. 01312428200</span>
            <p>Address: Redwood City, 2000</p>
          </Delivery>

          <CartTotal product={product} />

          <SubTitle>Select your payment method</SubTitle>

          <PaymentOptions product={product} />
          
        </Container>
        :
        <Review>
          <ProductDetails product={product} />

          <Payment>
            <h6>Payment Method</h6>
            <div>
              <img src={Bank} alt="Online Banking"/>
              <span>Online Banking</span>
            </div>
          </Payment>

          <CartTotal product={product} />
          <ActionButton text="Place order" fn={handlePurchase} />

        </Review>
      }
    </>
  )
}

OrderSummary.propTypes = {
  page: PropTypes.string,
  product: PropTypes.object.isRequired,
}