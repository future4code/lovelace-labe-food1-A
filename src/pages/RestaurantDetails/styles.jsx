import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  
`;

export const RestaurantCover = styled.div`
  height: 7.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border: solid 1px #b8b8b8;
  margin: 1rem 0 0.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 22rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const Details = styled.div`
  color: #b8b8b8;
  p {
    margin: 0 0 0.5rem 0;
  }
`;

export const Title = styled.p`
  color: #e86e5a;
`;

export const DoubleInfos = styled.div`
  width: 100%;
  display: flex;
  p:nth-child(1){
    margin-right: 3rem;
  }
`;

