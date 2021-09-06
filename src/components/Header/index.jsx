import React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';

const Header = ({ backButton, title }) => {
  const history = useHistory()
  return (
    <S.Headers>
      {backButton && <S.BackIcon onClick={history.goBack}/>}
      <S.Tittle>{title}</S.Tittle>
    </S.Headers>
  );
};

export default Header;
