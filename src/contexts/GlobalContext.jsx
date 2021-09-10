import React from 'react';

export const GlobalContext = React.createContext({});

export function GlobalContextProvider({ children }) {
  const [restaurants, setRestaurants] = React.useState([]);
  const [profile, setProfile] = React.useState({});
  const [actualRestaurant, setActualRestaurant] = React.useState({
    id: '',
    address: '',
    deliveryTime: '',
    shipping: '',
  });
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
        actualRestaurant,
        setActualRestaurant,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
