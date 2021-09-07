import React, { useState } from 'react'
import axios from 'axios'
import URL_BASE from '../constants/urlBase'

const useGetRestaurants = (header) => {
  const [data, setData] = useState(undefined)
  const [error, setError] = useState('')

  let response
  const getRestaurants = async () => {
    try {
      response = await axios.get(`${URL_BASE}/restaurants`, header)
    } catch (err) {
      setError(err.response.data.message)
    } finally {
      setData(response.data)
    }
  }

  return {data, error, getRestaurants}
}

export default useGetRestaurants
