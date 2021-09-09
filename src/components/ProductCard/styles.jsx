import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  height: 7rem;
  border: solid 1px #b8b8b8;
  border-radius: 0.5rem;
  width: 100%;
  position: relative;
  margin-bottom: 0.5rem;
  p {
    margin: 0 0 6px 0;
  }
`;

export const Name = styled.p`
  color: #e86e5a;
`;

export const Price = styled.p`
  color: #b8b8b8;
  font-size: 14px;
`;

export const Image = styled.div`
  width: 6.8rem;
  height: 7rem;
  margin-right: 1rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem 0 0 0.5rem; ;
`;

export const AddButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #e02020;
  color:#e02020;
  height: 2rem;
  width: 5.6rem; 
  border-radius: 0.5rem 0 0.5rem 0;
;
`;

export const Quantity = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #e02020;
  color:#e02020;
  height: 2rem;
  width: 2rem; 
  border-radius: 0 0.5rem 0 0.5rem;
;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 10rem;
`