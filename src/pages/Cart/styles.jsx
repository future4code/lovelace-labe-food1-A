import styled from 'styled-components'

export const Cart = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  main {
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;