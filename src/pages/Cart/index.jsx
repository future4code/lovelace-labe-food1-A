import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import useGetProfile from '../../services/useGetProfile';
import { GlobalContext } from '../../contexts/GlobalContext';

const Cart = () => {
  const { profile, actualRestaurant } = React.useContext(GlobalContext);
  const { getProfile } = useGetProfile();
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <S.Cart>
      <Header backButton title='Meu carrinho' />
      <main>
        <div>
          <p>Endereço de entrega</p>
          <p>{profile.address}</p>
        </div>

        {actualRestaurant.id ? (
          <div>
            <p>{actualRestaurant.address}</p>
            <p>
              {actualRestaurant.deliveryTime} - {actualRestaurant.deliveryTime + 10}min
            </p>
          </div>
        ) : (
          <p>Carrinho vazio</p>
        )}

        

      </main>
      <Footer page='cart' />
    </S.Cart>
  );
};

export default Cart;
