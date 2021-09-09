import React, { useState } from 'react'
import axios from "axios"
import URL_BASE from "../constants/urlBase"
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
      goTo.Profile()
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }
  return updateProfile
}
export default useUpdateProfile