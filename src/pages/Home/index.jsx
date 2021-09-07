import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OrderInProgressCard from '../../components/OrderInProgressCard';
import * as S from './styles';
import search from '../../assets/search.svg';
import { useCoordinator } from '../../hooks/useCoordinator';
import RestaurantCard from './RestaurantCard';
import useGetRestaurants from '../../services/useGetRestaurants';

const Home = () => {
  const headers = {
    headers: {
      ContentType: 'application/json',
      auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxVWUxUUJ5Nm9EQ3JFVklMR1VCIiwibmFtZSI6IkNsZWl0b24iLCJlbWFpbCI6ImNsZWl0b25AZ21haWwuY29tIiwiY3BmIjoiMTExLjExMS4xMTEtMTkiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjMxMDQ5MTMxfQ.51E_mfnn2LyYePtgj6657ief5ft6f23JUl9l2xDUZuk',
    },
  };
  const { getRestaurants, data } = useGetRestaurants(headers);
  const goTo = useCoordinator();

  useEffect(() => {
    getRestaurants();
  }, []);
  console.log(data?.restaurants);
  return (
    <S.Home>
      <Header backButton title={'Rappi4'} />
      <main>
        <S.SearchBar onClick={goTo.Search}>
          <img src={search} alt='Pesquisar' />
          <span>Restaurante</span>
        </S.SearchBar>

        <S.Carousel>
          <span>Burguer</span>
          <span>Asiática</span>
          <span>Massas</span>
          <span>Saudáveis</span>
        </S.Carousel>

        {data?.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            deliveryTime={restaurant.deliveryTime}
            shipping={restaurant.shipping}
            logoUrl={restaurant.logoUrl}
          />
        ))}

      </main>
      <Footer />
    </S.Home>
  );
};

export default Home;
