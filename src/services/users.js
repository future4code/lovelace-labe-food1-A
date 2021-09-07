import axios from "axios"
import { URL_BASE } from "../constants/urls"

export const login = (body, clear, history) => {

  axios.post(`${URL_BASE}/login`, body)
  .then((response) => {
    localStorage.setItem("token", response.data.token)
    clear()

  })
  .catch((err) => {
    alert("Não foi possível fazer login")
  })
}

export const signup = (body, clear, history) => {

  axios.post(`${URL_BASE}/signup`, body)
  .then((response) => {
    localStorage.setItem("token", response.data.token)
    clear()
  })
  .catch((err) => {
    console.log("Não foi possível cadastrar o usuário")
  })
}