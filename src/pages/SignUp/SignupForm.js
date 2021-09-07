import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as S from './styles'
import { signup } from '../../services/users'

const SignupForm = () => {
  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "", confirmPassword: "" })

  const inputProps = {
    pattern: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
  }

  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  function validarSenha() {
    if (form.password === form.confirmPassword) {
      alert("Sucesso")
      confirmPassword.setCustomValidity("");
      return true;
    } else {
      confirmPassword.setCustomValidity("Senhas diferentes!");
      confirmPassword.reportValidity();
      return false;
    }
  }

  const onSubmitSignupForm = (event) => {
    event.preventDefault()
    signup(form, clear)
    validarSenha()
  }

  return (
    <S.SignupFormContainer>
      <form onSubmit={onSubmitSignupForm} autoComplete="off">
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          type={"text"}
          label={"Nome"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"Nome e sobrenome"}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          type={"number"}
          label={"CPF"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"000.000.000-00"}
          inputProps={inputProps}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={'password'}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          size="6"
          placeholder={"Mínimo 6 caracteres"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id={"confirmPassword"}
          name={"confirmPassword"}
          value={form.confirmPassword}
          onChange={onChange}
          type={"password"}
          label={"Confirmar"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          size="6"
          placeholder={"Confirme a senha anterior"}
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
          Criar
        </Button>
      </form>
    </S.SignupFormContainer>
  )
}

export default SignupForm