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
      .catch((err) => {
        alert(err.response.data.message)
        setIsLoading(false)
      })
  }
  return login
}

export default useLogin

