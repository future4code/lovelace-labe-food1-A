import React from 'react'
import Header from '../../components/Header'
import EditAddressForm from '../EditAddress/EditAddressForm'
import * as S from './styles'
import AddressForm from '../../components/AddressForm'

const EditAddress = () => {
  return (
    <>
      <Header backButton title="Endereço" />
      <S.EditAddress>
        {/* <AddressForm /> */}
        <EditAddressForm />
      </S.EditAddress>
    </>
  )
}

export default EditAddress
