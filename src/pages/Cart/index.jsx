import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import useGetProfile from '../../services/useGetProfile';
import { GlobalContext } from '../../contexts/GlobalContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import ProductCard from '../../components/ProductCard';
import Button from '@material-ui/core/Button';

const Cart = () => {
  const {
    setCart,
    cart,
    profile,
    actualRestaurant,
    cartProducts,
    setCartProducts,
  } = React.useContext(GlobalContext);

  const [payMethod, setPayMethod] = React.useState('money');

  const handleMoney = () => {
    setPayMethod('money');
    console.log(payMethod);
  };
  const handleCard = () => {
    setPayMethod('creditcard');
    console.log(payMethod);
  };

  const { getProfile } = useGetProfile();
  useEffect(() => {
    getProfile();
  }, []);

  const removeItemFromCart = (id) => {
    const spreadCart = cart;
    const filteredSpreadCart = spreadCart.products?.filter(
      (product) => product.id !== id
    );
    setCart({ products: filteredSpreadCart });

    const spreadCartProducts = cartProducts;
    const filteredSpreadCartProducts = spreadCartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredSpreadCartProducts);
  };

  return (
    <S.Cart>
      <Header backButton title='Meu carrinho' />
      <S.MainContainer>
        <div>
          <p>Endereço de entrega</p>
          <p>{profile.address}</p>
        </div>

        {actualRestaurant.id ? (
          <div>
            <p>{actualRestaurant.address}</p>
            <p>
              {actualRestaurant.deliveryTime} -{' '}
              {actualRestaurant.deliveryTime + 10}min
            </p>
          </div>
        ) : (
          <p>Carrinho vazio</p>
        )}

        {cartProducts.length > 0 &&
          cartProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              photoUrl={product.photoUrl}
              name={product.name}
              description={product.description}
              price={product.price}
              removeItemFromCart={removeItemFromCart}
            />
          ))}
        {actualRestaurant.id && <p>R${actualRestaurant.shipping},00</p>}

        <div>
          <p>SUBTOTAL</p>
          <p>R$ 60</p>
        </div>

        <div>
          <p>Forma de pagamento</p>
          <hr />
          <form action=''>
            <div>
              <input
                type='radio'
                id='dinheiro'
                name='paymentmethod'
                onChange={handleMoney}
              />
              <label htmlFor='dinheiro'>Dinheiro</label>
            </div>
            <div>
              <input
                type='radio'
                id='cartao'
                name='paymentmethod'
                onChange={handleCard}
              />
              <label htmlFor='cartao'>Cartão de crédito</label>
            </div>
          </form>
        </div>
        <Button type={'submit'} variant='contained' color='primary' fullWidth>
          Confirmar
        </Button>
      </S.MainContainer>
      <Footer page='cart' />
    </S.Cart>
  );
};

export default Cart;
