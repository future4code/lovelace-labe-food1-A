import React from 'react'
import * as S from './styles'

const RestaurantCard = () => {
  return (
    <S.RestaurantCard>
      <img src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/5B7DD428-D8FF-48F8-B4CE-DE571F8E47E1.png" alt="Nome do prato" />

      <S.Title>Vinil Butantã</S.Title>
      <S.Info>
        <span>50 - 60min</span>
        <span>Frete R$6,00</span>
      </S.Info>
    </S.RestaurantCard>
  )
}

export default RestaurantCard
