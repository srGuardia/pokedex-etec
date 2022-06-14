import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem 0;
`;
