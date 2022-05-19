import styled from 'styled-components';
import colorsGlobal from '../../global/styles/colorsGlobal';

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
		}
	}

	@media (max-width: 425px) {
		flex-direction: column;
		gap: 2rem 0;
	}
`;
