import { Actions, Container } from './styles'
import logo from '../../assets/img/logo.png'
import { Input } from '../Input'
import { CgPokemon } from 'react-icons/cg'
import { ThemeName } from '../../@types/theme'

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

type HeaderProps = {
  handleFetch: () => void
  handleTheme: (theme: ThemeName) => void
  themeName: ThemeName
}

export const Header = ({
  handleFetch,
  handleTheme,
  themeName,
}: HeaderProps) => (
  <Container>
    <img data-aos='zoom-in' src={logo} loading='lazy' />

    <Actions>
      <Input type='search' placeholder='Search...' />
      <CgPokemon onClick={handleFetch} />

      {themeName === 'dark' ? (
        <BsFillSunFill onClick={() => handleTheme(ThemeName.light)} />
      ) : (
        <BsFillMoonStarsFill onClick={() => handleTheme(ThemeName.dark)} />
      )}
    </Actions>
  </Container>
)
