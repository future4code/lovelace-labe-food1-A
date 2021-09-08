import React from 'react'
import Header from '../../components/Header'
import EditProfileForm from './EditProfileForm'
import * as S from './styles'

const EditProfile = () => {
  return (
    <div>
      <Header backButton title="Editar" />
      <S.EditProfileInnerContainer>
        <EditProfileForm />
      </S.EditProfileInnerContainer>
    </div>
  )
}

export default EditProfile
