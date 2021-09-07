import React from 'react'
import SignupForm from './SignupForm'
import logo from '../../assets/logo.svg'
import * as S from './styles'
import Header from '../../components/Header'

const Signup = () => {
  return (
    <>
    <Header backButton/>
    <S.SignupMainContainer>
      <img src={logo} alt={"Logo da Rappi4"}/>
      <h1>Cadastrar</h1>
      <SignupForm />
    </S.SignupMainContainer>
    </>
  )
}

export default Signup
