import { Actions, Container } from './styles';
import logo from '../../assets/img/logo.png';
import { Input } from '../Input';
import { CgPokemon } from 'react-icons/cg';

type HeaderProps = {
	handleFetch: () => void;
};

export const Header = ({ handleFetch }: HeaderProps) => (
	<Container>
		<img data-aos='zoom-in' src={logo} loading='lazy' />

		<Actions>
			<Input type='search' placeholder='Search...' />
			<button onClick={handleFetch}>
				<CgPokemon />
			</button>
		</Actions>
	</Container>
);
