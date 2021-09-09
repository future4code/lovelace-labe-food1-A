import React from 'react'
import axios from 'axios';
import URL_BASE from '../constants/urlBase';
import { GlobalContext } from '../contexts/GlobalContext'


const useGetProfile = () => {
  const { setProfile } = React.useContext(GlobalContext)

  const getProfile = () => {
    axios
      .get(`${URL_BASE}/profile`, {
        headers: {
          auth: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        setProfile(response.data.user);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  
  return {getProfile}
}

export default useGetProfile
