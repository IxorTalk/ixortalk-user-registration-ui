// @flow
import * as React from 'react'
import { Router, Redirect } from '@reach/router'
import { ThemeProvider } from 'emotion-theming'

import config from './config'
import { Register } from './Register'
import { ResetPassword } from './ResetPassword'
import { isDev } from './utils'

const basepath = isDev() ? '/user-registration-ui' : ''
const App = () => (
  <ThemeProvider theme={config.theme}>
    <Router id="router" basepath={basepath}>
      <Redirect noThrow={isDev()} from="/" to={`${basepath}/register`} />
      <Register path="register" />
      <ResetPassword path="reset-password" />
    </Router>
  </ThemeProvider>
)

export default App
