import React from 'react';
import * as S from './styles';

const RequestCard = () => {
  return (
    <S.RequestCard>
      <S.InnerContainer>
        <img
          src='https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/0A85F077-06AC-463E-AA27-702101B0326A.svg'
          alt=''
        />
        <div>
          <p>Pedido em andamento</p>
          <p>Bullguer Vila Madalena</p>
          <p>
            <strong>SUBTOTAL R$67,00</strong>
          </p>
        </div>
      </S.InnerContainer>
    </S.RequestCard>
  );
};

export default RequestCard;
