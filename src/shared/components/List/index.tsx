import { formatNumber } from '../../../utils/functions'
import { PokemonData } from '../../@types/pokemon'
import {
  Container,
  Content,
  ItemsContainer,
  TextType,
  TypesContainer,
} from './styles'

type ListProps = {
  data: PokemonData[]
}

export const List = ({ data }: ListProps) => {
  return (
    <Container data-aos='fade-right'>
      {data
        .sort((a, b) => a.id - b.id)
        .map((pokemon, index) => (
          <Content key={index}>
            <ItemsContainer type={pokemon.types[0].type.name}>
              <img
                loading='lazy'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt={pokemon.name}
              />

              <h1>
                <strong>#{formatNumber(pokemon.id)}</strong> {pokemon.name}
              </h1>

              <TypesContainer>
                {pokemon.types.map((type, index) => (
                  <TextType
                    key={index}
                    isMarginLeft={pokemon.types.length > 2 ? true : false}
                  >
                    {type.type.name}
                  </TextType>
                ))}
              </TypesContainer>
            </ItemsContainer>
          </Content>
        ))}
    </Container>
  )
}
