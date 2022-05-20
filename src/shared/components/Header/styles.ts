import styled, { keyframes } from 'styled-components';
import colorsGlobal from '../../global/styles/colorsGlobal';

const rotate = keyframes`
0% {
	transform: rotate(0deg);
}

100% {
	transform: rotate(360deg);
}
`;

export const Container = styled.header`
	background-color: #000000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 2rem;

	@media (max-width: 375px) {
		img {
			width: 100%;
		}
	}
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0 1rem;

	button {
		height: 100%;
		border: none;
		background-color: transparent;
		cursor: pointer;

		svg {
			color: ${colorsGlobal.orange};
			font-size: 3rem;

			&:active {
				animation: ${rotate} 0.7s normal;
			}
		}
	}

	@media (max-width: 425px) {
		flex-direction: column;
		gap: 2rem 0;
	}
`;
