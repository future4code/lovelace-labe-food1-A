import React from 'react';
import Header from '../../components/Header';
import * as S from './styles';
import search from '../../assets/search.svg';

const Search = () => {
  return (
    <S.SearchContainer>
      <Header backButton title={'Busca'} />
      <S.SearchBar>
        <img src={search} alt='Pesquisar' />
        <S.InputSearch type='text' placeholder='Restaurante' autoFocus />
      </S.SearchBar>
      <span>
        Busque por nome de restaurante
      </span>
    </S.SearchContainer>
  );
};

export default Search;
