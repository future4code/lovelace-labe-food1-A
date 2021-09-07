import styled from 'styled-components'

export const RestaurantCard = styled.div`
  height: 188px;
  padding: 0 0 0.5rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  width: 100%;
  max-width: 328px;
  margin: 0 auto 0.5rem;
  img{
    width: 100%;
    height: 120px;
    margin: 0 0 12px;
    object-fit: contain;
  }
`

export const Title = styled.span`
  color: #e86e5a;
  margin: 12px 16px 4px;
`

export const Info = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 4px 16px 0;
  color: #b8b8b8;
`