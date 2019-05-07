// @flow
import { createTheme } from './defaultTheme'

const { theme, ...rest } = window.config

const config = {
  theme: createTheme(theme),
  ...rest,
}
export default config
