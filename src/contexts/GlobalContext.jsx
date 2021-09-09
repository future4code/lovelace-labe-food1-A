import React from 'react';

export const GlobalContext = React.createContext({});

export function GlobalContextProvider({ children }) {
  const [restaurants, setRestaurants] = React.useState([]);
  const [profile, setProfile] = React.useState({});
  const [cart, setCart] = React.useState({
    products: [],
    paymentMethod: '',
  });

  return (
    <GlobalContext.Provider
      value={{
        restaurants,
        setRestaurants,
        profile,
        setProfile,
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
