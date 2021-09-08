import axios from "axios"
import { URL_BASE } from "../constants/urls"
import { useCoordinator } from "../hooks/useCoordinator"

const useLogin = (body) => {
  const goTo = useCoordinator()

  const login = (setIsLoading) => {
    setIsLoading(true)
    axios.post(`${URL_BASE}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goTo.Home()
        setIsLoading(false)
      })
      .catch(() => {
        alert("Não foi possível fazer login")
        setIsLoading(false)
      })
  }
  return login
}

export default useLogin

