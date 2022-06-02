import styled from 'styled-components'

export const Container = styled.input`
  width: 20rem;
  height: 2rem;
  border: 0.2rem solid transparent;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.7s;

  &:hover,
  &:focus {
    border-color: yellow;
  }
`
