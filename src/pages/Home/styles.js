import styled from 'styled-components';

export const SearchBar = styled.div`
  box-sizing: border-box;
  margin: 0.5rem auto 0;
  width: 328px;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  color: #d0d0d0;
  font-weight: normal;
  img {
    margin-right: 1rem;
  }
  :hover {
    cursor: text;
  }
`;
export const Carousel = styled.div`
  width: auto;
  overflow: overlay;
  display: flex;
  align-items: center;
  height: auto;
  padding: 12px 0 12px 16px;
  margin: 0.5rem;
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  span {
    margin: 0 1.4rem;
    text-align: center;
    :visited{
      color: #e86e5a;
    }
  }
`;

export const Home = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  main {
    overflow: auto;
  }
`;
