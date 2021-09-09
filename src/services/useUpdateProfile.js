import React, { useState } from 'react'
import axios from "axios"
import { URL_BASE } from "../constants/urls"
import { useCoordinator } from "../hooks/useCoordinator"

const useUpdateProfile = (body) => {
  const goTo = useCoordinator()

  const updateProfile = () => {
    axios.put(`${URL_BASE}/profile`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((response) => {
      console.log(response.data)
      goTo.Profile()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
  return updateProfile
}
export default useUpdateProfile