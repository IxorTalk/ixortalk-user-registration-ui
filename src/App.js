/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016-present IxorTalk CVBA
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
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
