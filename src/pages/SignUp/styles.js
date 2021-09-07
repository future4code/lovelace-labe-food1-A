import styled from 'styled-components'

export const SignupFormContainer = styled.div`
  display: grid;
  place-items: center;

  button{
    margin-top: 1rem;
  }
`

export const SignupMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
    margin: 1rem auto;

    h1{
      font-size: 1rem;
      text-align: center;
      font-weight: normal;
      letter-spacing: -0.39px;
      color: #000000;
    }

    img{
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    button{
      margin-top: 1.75rem;
    }
`