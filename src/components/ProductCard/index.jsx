import React from 'react';
import * as S from './styles';

const ProductCard = ({ photoUrl, name, description, price, onClick }) => {
  return (
    <S.ProductCard>
      <S.Image img={photoUrl} />
      <S.Infos>
        <S.Name>{name}</S.Name>
        <S.Price>{description}</S.Price>
        <p>R${price.toFixed(2).replace('.', ',')}</p>
      </S.Infos>
      <S.AddButton onClick={onClick}>adicionar</S.AddButton>
      <S.Quantity>2</S.Quantity>
    </S.ProductCard>
  );
};

export default ProductCard;
