import axios from "axios"
import URL_BASE from '../constants/urlBase'
import { useCoordinator } from '../hooks/useCoordinator'

const useAddAddress = (body) => {
  const goTo = useCoordinator()

  const addAddress = (setIsLoading) => {
    setIsLoading(true)
    axios.put(`${URL_BASE}/address`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goTo.Profile()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.data.message)
        setIsLoading(false)
      })
  }
  return addAddress

}
export default useAddAddress