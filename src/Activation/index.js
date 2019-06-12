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
import { split } from 'ramda'
import { parse } from 'query-string'
import {
  Flex,
  Spinner,
  Grid,
  Col,
  Heading,
  Text,
  SuccessAlert,
  DisplayError,
} from '../Components'

type Props = {}
export const Activation = (props: Props) => {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const activate = async () => {
    const { key } = parse(split('?', window.location.href)[1])
    const resp = await fetch(`/uaa-thirdparty/api/activate?key=${key}`)
    if (!resp.ok) setError(true)
    setLoading(false)
  }
  React.useEffect(() => {
    activate()
  }, [])

  return (
    <Grid maxWidth={480} py={3} px={4}>
      <Col my={3}>
        <Heading tier="4">Activate Account</Heading>
      </Col>
      <Col>
        {loading ? (
          <Flex width={1} py={2}>
            <Flex pr={2}>
              <Text color="darks.4">Activating account...</Text>
            </Flex>
            <Spinner color="primary.1" />
          </Flex>
        ) : error ? (
          <DisplayError>
            We couldn't activate your account. Did you follow the correct link?
          </DisplayError>
        ) : (
          <SuccessAlert>Your account has been activated!</SuccessAlert>
        )}
      </Col>
    </Grid>
  )
}
