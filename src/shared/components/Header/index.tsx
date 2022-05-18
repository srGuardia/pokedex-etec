import { Container } from './styles';
import logo from '../../assets/img/logo.png';
import { Input } from '../Input';

export const Header = () => (
	<Container>
		<img data-aos='zoom-in' src={logo} loading='lazy' />
		<Input type='search' placeholder='Search...' />
	</Container>
);
