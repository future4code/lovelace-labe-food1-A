import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { useCoordinator } from './useCoordinator'

const useProtectedPage = () => {
  const goTo = useCoordinator()
  const history = useHistory()

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goTo.Login()
    }
  }, [history])
}

export default useProtectedPage