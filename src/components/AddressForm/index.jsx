import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm'
import * as S from './styles'

const AddressForm = () => {
  const [form, onChange, clear] = useForm({ street: "", number: "", apartment: "", neighbourhood: "", city: "", state: "" })

  const onSubmitAddressForm = (event) => {
    event.preventDefault()
  }

  return (
    <S.AddressFormContainer>
      <form onSubmit={onSubmitAddressForm} autoComplete="off">
        <TextField
          name={"street"}
          value={form.street}
          onChange={onChange}
          type={"text"}
          label={"Endereço"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Rua/Avenida"}
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={onChange}
          type={"number"}
          label={"Número"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Número"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"apartment"}
          value={form.apartment}
          onChange={onChange}
          type={"text"}
          label={"Complemento"}
          variant={"outlined"}
          margin={"normal"}
          fullWidth
          placeholder={"Apartamento/Bloco"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          type={"text"}
          label={"Bairro"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Bairro"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={onChange}
          type={"text"}
          label={"Cidade"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Cidade"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"state"}
          value={form.state}
          onChange={onChange}
          type={"text"}
          label={"Estado"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Estado"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type={"submit"}
          variant="contained"
          margin={"normal"}
          fullWidth
          color={"primary"}
        >
          Salvar
        </Button>
      </form>
    </S.AddressFormContainer>
  )
}

export default AddressForm
