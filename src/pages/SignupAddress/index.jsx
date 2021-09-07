import React from 'react'
import AddressForm from '../../components/AddressForm'
import Header from '../../components/Header'
import * as S from './styles'

const SignupAddress = () => {
  return (
    <>
      <Header backButton />
      <S.SignupAddressContainer>
        <h1>Meu endereço</h1>
        <AddressForm />
      </S.SignupAddressContainer>
    </>

  )
}

export default SignupAddress
