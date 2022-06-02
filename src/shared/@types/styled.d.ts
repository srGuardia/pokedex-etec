import 'styled-components'
import { themes } from '../global/themes'

declare module 'styled-components' {
  type Theme = typeof themes.light

  export interface DefaultTheme extends Theme {}
}
