import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import axios from 'axios';
import { URL_BASE } from '../../constants/urls';
import Edit from '../../assets/edit.svg';
import { useCoordinator } from '../../hooks/useCoordinator';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  const goTo = useCoordinator();

  const getProfile = () => {
    axios
      .get(`${URL_BASE}/profile`, {
        headers: {
          auth: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        console.log(response.data.user);
        setUser(response.data.user);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getOrdersHistory = () => {
    axios
      .get(`${URL_BASE}/orders/history`, {
        headers: {
          auth: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        console.log(response.data);
        setOrders(response.data.orders);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const convertDate = (timestamp) => {
    let time = new Date(timestamp);
    let day = time.getDate().toString().padStart(2, '0');
    let month = (time.getMonth() + 1).toString().padStart(2, '0');
    let year = time.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const showOrders =
    orders.length > 0 ? (
      orders.map((order) => {
        return (
          <S.OrderHistoryCard>
            <p>{order.restaurantName}</p>
            <p>{convertDate(order.createdAt)}</p>
            <p>SUBTOTAL R${order.totalPrice},00</p>
          </S.OrderHistoryCard>
        );
      })
    ) : (
      <p style={{ textAlign: 'center' }}>Você não realizou nenhum pedido</p>
    );

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    getOrdersHistory();
  }, []);

  return (
    <S.Profile>
      <Header title={'Meu perfil'} />
      <main>
        <S.UserData>
          <p>
            {user.name}{' '}
            <img onClick={goTo.EditProfile} src={Edit} alt={'Ícone de edit'} />
          </p>
          <p>{user.email}</p>
          <p>{user.cpf}</p>
        </S.UserData>
        <section>
          <p>
            Endereço cadastrado{' '}
            <img onClick={goTo.EditAddress} src={Edit} alt={'Ícone de edit'} />
          </p>
          <p>{user.address}</p>
        </section>
        <S.UserOrderHistory>
          <p>Histório de pedidos</p>
          <hr />
          {showOrders}
        </S.UserOrderHistory>
      </main>
      <Footer page='profile' />
    </S.Profile>
  );
};

export default Profile;
