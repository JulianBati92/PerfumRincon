import PropTypes from 'prop-types';
import { BiCart } from 'react-icons/bi';

function CartWidget({ numeroDeItemsEnCarrito }) {
  return (
    <a className="nav-link" href="#">
      <BiCart className="cart-icon" />
      <span className="cart-count">{numeroDeItemsEnCarrito}</span>
    </a>
  );
}

CartWidget.propTypes = {
  numeroDeItemsEnCarrito: PropTypes.number.isRequired,
};

export default CartWidget;