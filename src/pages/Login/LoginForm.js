import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import * as S from './styles'
import { login } from '../../services/users';

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitLoginForm = (event) => {
    event.preventDefault()
    login(form, clear)
  }

  return (
    <S.LoginFormContainer>
      <form onSubmit={onSubmitLoginForm} autoComplete="off">
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          type={"email"}
          label={"e-mail"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"email@email.com"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={"password"}
          label={"Senha"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"Mínimo 6 caracteres"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type={"submit"}
          variant="contained"
          color="primary"
          fullWidth
        >
          Entrar
        </Button>
      </form>
    </S.LoginFormContainer>
  )
}

export default LoginForm