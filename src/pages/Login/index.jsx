import React from 'react'
import LoginForm from './LoginForm'
import logo from '../../assets/logo.svg'
import * as S from './styles'
import Button from '@material-ui/core/Button';

const Login = () => {
  return (
    <S.LoginMainContainer>
      <img src={logo} alt={"Logo da Rappi4"} />
      <h1>Entrar</h1>
      <LoginForm />
      <Button
        type={"submit"}
        color="secondary"
        fullWidth
        margin={"normal"}
      >
        Não possui cadastro? Clique aqui.
      </Button>
    </S.LoginMainContainer>
  )
}

export default Login
