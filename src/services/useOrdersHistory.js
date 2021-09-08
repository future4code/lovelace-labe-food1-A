import React, { useState } from 'react'
import axios from 'axios'
import URL_BASE from '../constants/urlBase'

const useOrdersHistory = () => {
  const [orders, setOrders] = useState([])

  const getOrdersHistory = () => {
    axios.get(`${URL_BASE}/orders/history`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((response) => {
      console.log(response)
      setOrders(response.data)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
  return getOrdersHistory
}

export default useOrdersHistory