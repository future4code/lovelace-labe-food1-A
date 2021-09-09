import React from 'react'
import axios from 'axios'

const usePlaceOrder = () => {

  const [data, setData] = useState('')

  const placeOrder = (id, body) => {
    axios
      .post(`${URL_BASE}/restaurants/${id}/order`, 
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
