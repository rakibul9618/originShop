import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCert } from '../redux/cartSlice';

const CartScreen = () => {
  const location = useLocation();
  //! Code Change here
  // * const id = location.pathname.split('/')[1];
  const id = location.pathname.split('/')[1];
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCert({ id, dispatch }));
  }, []);

  return (
    <div>
      {/* <h1>{cart}</h1> */}
      <h1>Cart</h1>
    </div>
  );
};

export default CartScreen;
