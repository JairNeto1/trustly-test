import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Catalog from './pages/catalog';
import Checkout from "./pages/checkout/index";
import Confirmation from "./pages/confirmation/index";

export default function Routes({ data }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Catalog {...props} products={data} />} />
        <Route path="/checkout/:id" render={props => <Checkout {...props} products={data} /> } />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  )
}

Routes.propTypes = {
  data: PropTypes.array.isRequired,
}