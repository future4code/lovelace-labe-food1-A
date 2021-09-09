import axios from "axios"
import { URL_BASE } from "../constants/urls"
import { useCoordinator } from "../hooks/useCoordinator"

const useUpdateProfile = (body) => {
  const goTo = useCoordinator()

  const updateProfile = (setIsLoading) => {
    setIsLoading(true)
    axios.put(`${URL_BASE}/profile`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then(() => {
        goTo.Profile()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response)
        setIsLoading(false)
      })
  }
  return updateProfile
}
export default useUpdateProfile