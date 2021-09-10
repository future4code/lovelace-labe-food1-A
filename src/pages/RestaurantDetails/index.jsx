import React from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import useGetDetails from '../../services/useGetDetails';
import { categoriesMeals } from '../../constants/categories';
import ProductCard from '../../components/ProductCard';
import { GlobalContext } from '../../contexts/GlobalContext';
import ShowModal from '../../components/Modal';

const RestaurantDetails = () => {
  const { setCart, cart } = React.useContext(GlobalContext);
  const { restaurantId } = useParams();
  const { getDetails, data } = useGetDetails();

  const token = localStorage.getItem('token');

  React.useEffect(() => {
    getDetails(token, restaurantId);
  }, []);

  const filterMeal = (category) => {
    return data && data.products.filter((item) => item.category === category);
  };

  const returnFilteredProducts = () => {
    let filteredProducts = [];
    for (const category of categoriesMeals) {
      filterMeal(category).length > 0 &&
        filteredProducts.push(filterMeal(category));
    }
    return filteredProducts;
  };

  

  const addItemToCart = (id, quantity, method) => {
    const spreadCart = cart;
    spreadCart.products.push({
      id: id,
      quantity: quantity,
    });
    spreadCart.paymentMethod = method
    // console.log(spreadCart);
    setCart(spreadCart);
    console.log(cart);

    // spreadCart.push({ id: id, quantity: quantity });
    // console.log(cart);
  };
  return (
    <S.DetailsContainer>
      <Header backButton title='Restaurante' />
      {data && (
        <S.MainContainer>
          <ShowModal />
          <S.RestaurantCover>
            <img src={data.logoUrl} alt={data.dane} />
          </S.RestaurantCover>

          <S.Details>
            <S.Title>{data.name}</S.Title>
            <p>{data.category}</p>
            <S.DoubleInfos>
              <p>
                {data.deliveryTime} - {data.deliveryTime + 10}min
              </p>
              <p>Frete R${data.shipping}, 00</p>
            </S.DoubleInfos>
            <p>{data.address}</p>
          </S.Details>

          {returnFilteredProducts().map((array, index) => (
            <div key={index}>
              <h2>{array[0].category}</h2>
              <hr />
              {array.map((product) => (
                <ProductCard
                  key={product.id}
                  photoUrl={product.photoUrl}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  onClick={() => {
                    addItemToCart(product.id, 10, 'creditcard');
                    
                  }}
                />
              ))}
            </div>
          ))}
        </S.MainContainer>
      )}
    </S.DetailsContainer>
  );
};

export default RestaurantDetails;
