import styled from 'styled-components'

export const SearchBar = styled.div`
  box-sizing: border-box;
  margin: 0.5rem auto 1.25rem;
  width: 328px;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  color: #d0d0d0;
  position: relative;
  img { margin-right: 1rem; }
  :hover { cursor: text; }
`;

export const InputSearch = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  left: 0;
  top: 1px;
  padding-left: 3.5rem;
  position: absolute;
  box-sizing: border-box;
  border: none;
  outline: none;
  ::-webkit-input-placeholder { 
    color:#d0d0d0;
    font-size: 1rem;
  }
  input:-moz-placeholder { 
    color:#d0d0d0;
    font-size: 1rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:  center;
`