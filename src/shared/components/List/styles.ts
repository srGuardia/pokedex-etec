import styled, { css } from 'styled-components';
import colorsGlobal from '../../global/styles/colorsGlobal';

type StyledProps = {
  type?: string;
  isMarginLeft?: boolean;
};

export const Container = styled.ul`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.li`
  overflow: hidden;
  border-bottom-left-radius: 6rem;
  transition: all 0.7s;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ItemsContainer = styled.a<StyledProps>`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 1rem 0;
  text-transform: capitalize;

  ${({ type }) =>
    ((type === 'normal' || type === 'fighting') &&
      css`
        background-color: ${colorsGlobal.graySlate};
      `) ||
    ((type === 'flying' || type === 'water') &&
      css`
        background-color: ${colorsGlobal.blue};
      `) ||
    ((type === 'ground' || type === 'rock' || type === 'poison') &&
      css`
        background-color: ${colorsGlobal.violet};
      `) ||
    ((type === 'bug' || type === 'fire') &&
      css`
        background-color: ${colorsGlobal.orange};
      `) ||
    ((type === 'ghost' || type === 'steel') &&
      css`
        background-color: ${colorsGlobal.onyx};
      `) ||
    ((type === 'psychic' || type === 'electric') &&
      css`
        background-color: ${colorsGlobal.yellow};
      `) ||
    ((type === 'dragon' || type === 'ice') &&
      css`
        background-color: ${colorsGlobal.pink};
      `) ||
    ((type === 'grass' || type === 'dark') &&
      css`
        background-color: ${colorsGlobal.green};
      `) ||
    ((type === 'fairy' || type === 'unknown') &&
      css`
        background-color: ${colorsGlobal.purple};
      `) ||
    (type === 'shadow' &&
      css`
        background-color: ${colorsGlobal.brown};
      `)}

  h1 {
    color: ${colorsGlobal.black};
  }

  strong {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    color: ${colorsGlobal.white};
  }

  img {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 375px) {
    width: 18rem;

    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const TypesContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TextType = styled.span<StyledProps>`
  width: 6rem;
  padding: 0.5rem;
  border-bottom-left-radius: 1rem;
  background-color: ${colorsGlobal.grayLight};
  color: ${colorsGlobal.black};
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;

  ${({ isMarginLeft }) =>
    isMarginLeft &&
    css`
      :first-child {
        margin-left: 2rem;
      }
    `}
`;
