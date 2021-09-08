import React from 'react'

export const GlobalContext = React.createContext({})

export function GlobalContextProvider({children}) {
  const [restaurants, setRestaurants] = React.useState([])

  return (
    <GlobalContext.Provider value={{
      restaurants,
      setRestaurants,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
