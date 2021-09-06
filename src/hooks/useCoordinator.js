import { useHistory } from 'react-router-dom'

export const useCoordinator = () => {
  let history = useHistory()
  const goTo = {
    Cart: () => history.push('/cart'),
    EditAdress: () => history.push('/cadastro'),
    EditProfile: () => history.push('/adicionar-receita'),
    Home: () => history.push('/'),
    Login: () => history.push('/login'),
    Profile: () => history.push('/profile'),
    RestaurantDetail: () => history.push('/'),
    SignUp: () => history.push('/signup'),
    SignUpAdress: () => history.push('/signupadress'),
  }

  return { goTo }
}
