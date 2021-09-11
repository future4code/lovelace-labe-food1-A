import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import useGetProfile from '../../services/useGetProfile';
import { GlobalContext } from '../../contexts/GlobalContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import ProductCard from '../../components/ProductCard';
import Button from '@material-ui/core/Button';
import usePlaceOrder from '../../services/usePlaceOrder';

const Cart = () => {
  const {
    setCart,
    cart,
    profile,
    actualRestaurant,
    cartProducts,
    setCartProducts,
  } = React.useContext(GlobalContext);

  const { placeOrder } = usePlaceOrder();
  const { getProfile } = useGetProfile();

  const getInfosAndPlaceOrder = () => {
    if (
      cart.paymentMethod !== '' &&
      cart.products.length > 0 &&
      actualRestaurant.id !== ''
    ) {
      placeOrder(actualRestaurant.id, cart);
    } else if (cart.paymentMethod === '' && cart.products.length > 0) {
      alert('Selecione um método de pagamento.');
    } else if (cart.products.length == 0 && cart.paymentMethod !== '') {
      alert('Adicione um item ao carrinho.');
    } else {
      alert(
        'Adicione items ao carrinho e selecione um método de pagamento para confirmar sua compra.'
      );
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const removeItemFromCart = (id) => {
    const spreadCart = cart;
    const filteredSpreadCart = spreadCart.products?.filter(
      (product) => product.id !== id
    );
    setCart({ ...cart, products: filteredSpreadCart });

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
        <S.UserAdress>
          <div>
            <p>Endereço de entrega</p>
            <p>{profile.address}</p>
          </div>
        </S.UserAdress>

        {actualRestaurant.id ? (
          <S.RestaurantInfos>
            <div>
              <p>{actualRestaurant.name}</p>
              <p>{actualRestaurant.address}</p>
              <p>{actualRestaurant.deliveryTime}min</p>
            </div>
          </S.RestaurantInfos>
        ) : (
          <S.EmptyCart>
            <p>Carrinho vazio</p>
          </S.EmptyCart>
        )}

        <S.CardsContainer>
          <S.InsideContainer>
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
          </S.InsideContainer>
        </S.CardsContainer>

        <S.PaymentContainer>
          <S.Shipping>
            {actualRestaurant.id ? (
              <span>Frete R${actualRestaurant.shipping}, 00</span>
            ) : (
              <span>Frete R$00,00</span>
            )}
          </S.Shipping>

          <S.Subtotal>
            <span>SUBTOTAL</span>
            <span>R$60,00</span>
          </S.Subtotal>

          <S.PaymentMethod>
            <S.InsideContainer>
              <span>Forma de pagamento</span>
              <form onSubmit={(ev) => ev.preventDefault()}>
                <S.Hr />
                <S.PaymentOption>
                  <input
                    type='radio'
                    id='dinheiro'
                    name='paymentmethod'
                    onChange={() =>
                      setCart({ ...cart, paymentMethod: 'money' })
                    }
                  />
                  <label htmlFor='dinheiro'>Dinheiro</label>
                </S.PaymentOption>
                <S.PaymentOption>
                  <input
                    type='radio'
                    id='cartao'
                    name='paymentmethod'
                    onChange={() =>
                      setCart({ ...cart, paymentMethod: 'creditcard' })
                    }
                  />
                  <label htmlFor='cartao'>Cartão de crédito</label>
                </S.PaymentOption>
                <Button
                  onClick={() => getInfosAndPlaceOrder()}
                  type={'button'}
                  variant='contained'
                  color='primary'
                  fullWidth
                >
                  Confirmar
                </Button>
              </form>
            </S.InsideContainer>
          </S.PaymentMethod>
        </S.PaymentContainer>
      </S.MainContainer>
      <Footer page='cart' />
    </S.Cart>
  );
};

export default Cart;
