import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OrderInProgressCard from '../../components/OrderInProgressCard';
import * as S from './styles';
import search from '../../assets/search.svg';
import { useCoordinator } from '../../hooks/useCoordinator';
import RestaurantCard from './RestaurantCard';

const Home = () => {
  const goTo = useCoordinator();
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
          <span>Saudáveis</span>
          <span>Saudáveis</span>

        </S.Carousel>

        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </main>
      <Footer />
    </S.Home>
  );
};

export default Home;
