import styled from 'styled-components';

export const Cart = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: auto;
`;

export const UserAdress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #eeeeee;
  height: 4.75rem;
  div {
    width: 344px;
    margin: 0 auto;
  }
  p {
    letter-spacing: -0.39px;
    margin: 0 0 0 1rem;
    font-weight: 500;
    :nth-child(1) {
      margin-bottom: 0.5rem;
      color: #b8b8b8;
    }
  }
`;

export const RestaurantInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 5.88rem;
  div {
    width: 344px;
    margin: 0 auto;
  }
  p {
    margin: 0 0 0.5rem 1rem;
    color: #b8b8b8;
    :nth-child(1) {
      color: #e86e5a;
    }
    :nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

export const EmptyCart = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  width: 344px;
  margin: 1rem auto;
  padding: 0 1rem;
  
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const Shipping = styled.div`
  width: 328px;
  margin: 1rem auto;
  text-align: end;
  span {
    margin: 0 1rem;
  }
`;

export const Subtotal = styled.div`
  box-shadow: border-box;
  width: 328px;
  margin: 0 auto 1.5rem;
  display: flex;
  justify-content: space-between;
  span {
    margin: 0 1rem;
    :nth-child(2) {
      font-weight: bold;
      color: #e86e5a;
    }
  }
`;

export const PaymentMethod = styled.div`
  /* box-shadow: border-box; */
  flex-direction: column;
  width: 328px;
  margin: 0 auto 1rem;
  display: flex;
`;

export const Hr = styled.hr`
  border-color: transparent;
  border-bottom-color: black;
`;

export const InsideContainer = styled.div`
  margin: 0 1rem;
`;

export const PaymentOption = styled.div`
  margin-bottom: 0.5rem;
`;
