import axios from "axios"
import { URL_BASE } from "../constants/urls"
import { useCoordinator } from "../hooks/useCoordinator"

const useSignup = (body) => {
  const goTo = useCoordinator()

  const signup = (setIsLoading) => {
    setIsLoading(true)
    axios.post(`${URL_BASE}/signup`, body)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
        goTo.SignUpAdress()
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err?.response?.data)
        setIsLoading(false)
      })
  }
  return signup
}
export default useSignup