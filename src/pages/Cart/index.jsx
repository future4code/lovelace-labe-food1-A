import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import useGetProfile from '../../services/useGetProfile';
import { GlobalContext } from '../../contexts/GlobalContext';
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

  React.useEffect(() => {
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

        {actualRestaurant.id ? (
          <p>Frete R${actualRestaurant.shipping}, 00</p>
        ) : (
          <p>Frete R$00,00</p>
        )}

        <div>
          <p>SUBTOTAL</p>
          <p>R$ 60</p>
        </div>

        <div>
          <p>Forma de pagamento</p>
          <hr />
          <form>
            <div>
              <input
                type='radio'
                id='dinheiro'
                name='paymentmethod'
                onChange={() => setCart({ ...cart, paymentMethod: 'money' })}
              />
              <label htmlFor='dinheiro'>Dinheiro</label>
            </div>
            <div>
              <input
                type='radio'
                id='cartao'
                name='paymentmethod'
                onChange={() =>
                  setCart({ ...cart, paymentMethod: 'creditcard' })
                }
              />
              <label htmlFor='cartao'>Cartão de crédito</label>
            </div>
          </form>
        </div>
        <Button
          onClick={() => getInfosAndPlaceOrder()}
          type={'submit'}
          variant='contained'
          color='primary'
          fullWidth
        >
          Confirmar
        </Button>
      </S.MainContainer>
      <Footer page='cart' />
    </S.Cart>
  );
};

export default Cart;
