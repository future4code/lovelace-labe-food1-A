import React from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import useGetDetails from '../../services/useGetDetails';
import categories from '../../constants/categories';

const RestaurantDetails = () => {
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
    for (const category of categories) {
      filterMeal(category).length > 0 &&
        filteredProducts.push(filterMeal(category));
    }
    return filteredProducts;
  };

  console.log(returnFilteredProducts());

  return (
    <S.DetailsContainer>
      <Header backButton title='Restaurante' />
      {data && (
        <S.MainContainer>
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
              {array.map((product) => (
                <p key={product.id}>{product.name}</p>
              ))}
            </div>
          ))}
        </S.MainContainer>
      )}
    </S.DetailsContainer>
  );
};

export default RestaurantDetails;
