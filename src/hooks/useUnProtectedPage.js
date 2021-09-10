import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { useCoordinator } from './useCoordinator'

const useUnprotectedPage = () => {
  const goTo = useCoordinator()
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goTo.Home()
    }
  }, [history])
}

export default useUnprotectedPage