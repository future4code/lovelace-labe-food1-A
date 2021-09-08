import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as S from "./styles";
import useSignup from "../../services/useSignup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

const SignupForm = () => {
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });
  const signup = useSignup(form);
  const [isLoading, setIsLoading] = useState(false);

  const modulatedCPF = () => {
    return form.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  const onSubmitSignupForm = (event) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("As senhas estão diferentes");
    } else {
      form.cpf = modulatedCPF();
      signup(setIsLoading);
    }
  };

  // const password = document.getElementById('password');
  // const confirmPassword = document.getElementById('confirmPassword');
  // function validarSenha() {
  //   if (form.password === form.confirmPassword) {
  //     // alert("Sucesso")
  //     confirmPassword.setCustomValidity("");
  //     return true;
  //   } else {
  //     confirmPassword.setCustomValidity("Senhas diferentes!");
  //     confirmPassword.reportValidity();
  //     return false;
  //   }
  // }

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
          fullWidth
          margin={"normal"}
          placeholder={"000.000.000-00"}
          inputProps={{
            pattern: "/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/,",
          }}
          maxlength="14"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          id={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={"password"}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ pattern: "^.{6,}$" }}
          title={"A senha deve ter no mínimo 6 caracteres"}
          placeholder={"Mínimo 6 caracteres"}
          required
        />
        {/* <FormControl variant="outlined" style={{ width: "100%", marginTop: 10 }}>
          <InputLabel htmlFor="campoSenha" shrink>Senha</InputLabel>
          <OutlinedInput
            id="campoSenha"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={onChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={e => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl> */}
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
          placeholder={"Confirme a senha anterior"}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Button type={"submit"} variant="contained" color="primary" fullWidth>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Criar</>
          )}
        </Button>
      </form>
    </S.SignupFormContainer>
  );
};

export default SignupForm;
