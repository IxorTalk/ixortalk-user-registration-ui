// @flow
import * as React from 'react'
import { Router, Redirect } from '@reach/router'
import { ThemeProvider } from 'emotion-theming'

import config from './config'
import { Flex, TopBar, Background } from './Components'
import { Register } from './Register'
import { ResetPassword } from './ResetPassword'
import { isDev } from './utils'
import { ForgotPassword } from './ForgotPassword'
import { Activation } from './Activation/index'

const basepath = isDev() ? '' : '/user-registration-ui'

const App = () => (
  <ThemeProvider theme={config.theme}>
    <Background pt={80} flexDirection="column">
      <TopBar />
      <Flex
        as={Router}
        flexDirection="column"
        alignItems="center"
        id="router"
        basepath={basepath}>
        <Redirect noThrow={isDev()} from="/" to={`${basepath}/register`} />
        <Register path="register" />
        <ResetPassword path="reset-password" />
        <ForgotPassword path="forgot-password" />
        <Activation path="activate" />
      </Flex>
    </Background>
  </ThemeProvider>
)

export default App
