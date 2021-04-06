import 'styled-components'
import { MainThemeType } from '../theme/mainTheme'

declare module 'styled-components' {
  export interface DefaultTheme extends MainThemeType {}
}
