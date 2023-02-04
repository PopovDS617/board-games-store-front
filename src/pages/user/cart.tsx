import { useAppSelector } from '../../store/hooks';

const CartPage = () => {
  const { isAuthorized } = useAppSelector((state) => state.auth);

  return <div>hello</div>;
};

export default CartPage;
