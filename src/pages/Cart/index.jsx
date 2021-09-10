import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import useGetProfile from '../../services/useGetProfile';
import { GlobalContext } from '../../contexts/GlobalContext';
import useProtectedPage from '../../hooks/useProtectedPage';

const Cart = () => {
  useProtectedPage()
  const { profile } = React.useContext(GlobalContext);
  const { getProfile } = useGetProfile();
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <S.Cart>
      <Header title='Meu carrinho' />
      <main>
        <div>
          <p>Endereço de entrega</p>
          <p>{profile.address}</p>
        </div>
      </main>
      <Footer page='cart' />
    </S.Cart>
  );
};

export default Cart;
