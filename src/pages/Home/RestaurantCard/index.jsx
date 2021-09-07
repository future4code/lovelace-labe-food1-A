import React from 'react'
import * as S from './styles'

const RestaurantCard = ({name, deliveryTime, shipping, logoUrl}) => {
  return (
    <S.RestaurantCard>
      <img src={logoUrl} alt="Nome do prato" />

      <S.Title>{name}</S.Title>
      <S.Info>
        <span>{deliveryTime} - {deliveryTime += 10}min</span>
        <span>Frete R${shipping},00</span>
      </S.Info>
    </S.RestaurantCard>
  )
}

export default RestaurantCard
