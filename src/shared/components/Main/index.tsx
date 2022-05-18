import { ReactNode } from 'react';
import { MainWrapper } from './styles';

type MainProps = {
	children: ReactNode;
};

export const Main = ({ children }: MainProps) => (
	<MainWrapper>{children}</MainWrapper>
);
