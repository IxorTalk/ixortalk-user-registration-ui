// @flow
import * as React from 'react'
import { Router, Redirect } from '@reach/router'
import { ThemeProvider } from 'emotion-theming'

import config from './config'
import { Register } from './Register'
import { ResetPassword } from './ResetPassword'

const App = () => (
  <ThemeProvider theme={config.theme}>
    <Router id="router">
      <Redirect noThrow from="/" to="/register" />
      <Register path="register" />
      <ResetPassword path="reset-password" />
    </Router>
  </ThemeProvider>
)

export default App
