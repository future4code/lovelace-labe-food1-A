import styled from 'styled-components';

export const Cart = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.main`
  width: 100%;
  /* max-width: 22rem; */
  min-height: 100%;
  margin: 0 auto;
  /* padding: 0 1rem; */
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
      color: #e86e5a
    }
    :nth-child(3) {
      margin-bottom: 0;
    }
  }
`;
