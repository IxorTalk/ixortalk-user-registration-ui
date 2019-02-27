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
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'
import { parse } from 'query-string'
import {
  Background,
  Card,
  View,
  Heading,
  Button,
  TextInput,
  Text,
  Logo,
  DisplayError,
  BaseButton,
} from '../Components'

type FormValues = {
  resetKey: string,
  password: string,
  confirmPassword: string,
}

const resetPassword = async (
  { password: newPassword, resetKey: key }: FormValues,
  form,
) => {
  form.setStatus(null)
  const { status } = await fetch('/uaa/api/account/reset_password/finish', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ newPassword, key }),
  })
  form.setStatus(status)
  form.setSubmitting(false)
}

type Props = { location?: { search: string } }

const ResetPassword = ({ location = { search: '' } }: Props) => {
  return (
    <Background>
      <View py={4}>
        <Logo />
      </View>
      <View py={4}>
        <Card mx="auto" width={512} py={3} px={4}>
          <View my={3} ml={3}>
            <Heading>Reset Password</Heading>
          </View>
          <Formik
            initialValues={{
              resetKey: parse(location.search).resetKey,
              password: '',
              confirmPassword: '',
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string().required('Password is required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords don't match")
                .required('Confirm Password is required'),
            })}
            onSubmit={resetPassword}>
            {({ isSubmitting, isValid, status }) => {
              return status && status >= 200 && status < 300 ? (
                <View>
                  <View my={3} mx={3}>
                    <Text>Your password has been set successfully!</Text>
                  </View>
                  <View my={3}>
                    <BaseButton notInteractive bg="success">
                      Success!
                    </BaseButton>
                  </View>
                </View>
              ) : (
                <Form>
                  <DisplayError>{status}</DisplayError>
                  <View my={3}>
                    <Field
                      name="password"
                      type="password"
                      label="Password"
                      width={1}
                      component={TextInput.Field}
                    />
                  </View>
                  <View my={3}>
                    <Field
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      component={TextInput.Field}
                      width={1}
                    />
                  </View>
                  <View my={3}>
                    <Button type="submit" disabled={isSubmitting || !isValid}>
                      Submit
                    </Button>
                  </View>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </View>
    </Background>
  )
}

export { ResetPassword }
