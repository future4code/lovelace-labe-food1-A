import axios from "axios"
import { URL_BASE } from "../constants/urls"
import { useCoordinator } from "../hooks/useCoordinator"

const useSignupAddress = (body) => {
  const goTo = useCoordinator()

  const signupAddress = (setIsLoading) => {
    setIsLoading(true)
    axios.put(`${URL_BASE}/address`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goTo.Home()
        console.log(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.response)
        setIsLoading(false)
      })
  }
  return signupAddress

}
export default useSignupAddress