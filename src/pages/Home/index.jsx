import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OrderInProgressCard from '../../components/OrderInProgressCard';
import * as S from './styles';
import search from '../../assets/search.svg';
import { useCoordinator } from '../../hooks/useCoordinator';
import RestaurantCard from './RestaurantCard';
import useGetRestaurants from '../../services/useGetRestaurants';
import { GlobalContext } from '../../contexts/GlobalContext';

const Home = () => {
  const { restaurants } = React.useContext(GlobalContext);
  const token = localStorage.getItem('token');

  const { getRestaurants, error } = useGetRestaurants();
  const goTo = useCoordinator();

  useEffect(() => {
    getRestaurants(token);
  }, []);

  return (
    <S.Home>
      <Header backButton title={'Rappi4'} />
      <main>
        <S.SearchBar onClick={goTo.Search}>
          <img src={search} alt='Pesquisar' />
          <span>Restaurante</span>
        </S.SearchBar>

        {error && <S.Error>{error}</S.Error>}

        {restaurants && (
          <>
            <S.Carousel>
              <span>Burguer</span>
              <span>Asiática</span>
              <span>Massas</span>
              <span>Saudáveis</span>
            </S.Carousel>

            {restaurants?.map((restaurant) => (
              <RestaurantCard
                onClick={()=> goTo.RestaurantDetail(restaurant.id)}
                key={restaurant.id}
                name={restaurant.name}
                deliveryTime={restaurant.deliveryTime}
                shipping={restaurant.shipping}
                logoUrl={restaurant.logoUrl}
              />
            ))}
          </>
        )}
      </main>
      <Footer />
    </S.Home>
  );
};

export default Home;
