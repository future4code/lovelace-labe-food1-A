import React from 'react'
import axios from 'axios'
import URL_BASE from '../constants/urlBase'

const usePlaceOrder = () => {

  const [data, setData] = React.useState('')

  const placeOrder = (restaurantId, body) => {
    axios
      .post(`${URL_BASE}/restaurants/${restaurantId}/order`,
        body,
        {
          headers: {
            auth: localStorage.getItem('token'),
            ContentType: 'application/json',
          },
        })
      .then((response) => {
        console.log(response.data);
        // setData(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return { data, placeOrder }

}

export default usePlaceOrder
