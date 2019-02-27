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
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'
import getLocale from 'get-user-locale'
import {
  Background,
  TextInput,
  Card,
  Absolute,
  View,
  Heading,
  Button,
  Text,
  DisplayError,
  Logo,
  BaseButton,
} from '../Components'

type FormValues = {
  username: string,
  firstName: string,
  lastName: string,
  langKey: string,
}

const registerUser = async (values: FormValues, form) => {
  form.setStatus(null)
  console.log(values)
  const { status } = await fetch('/user-registration/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })
  form.setStatus(status)
  form.setSubmitting(false)
}

type Props = {}

const Register = (props: Props) => {
  return (
    <Background>
      <View py={4}>
        <Logo />
      </View>
      <View py={4}>
        <Card mx="auto" width={512} py={3} px={4}>
          <View my={3} ml={3}>
            <Heading>Register</Heading>
          </View>
          <Formik
            initialValues={{
              username: '',
              firstName: '',
              lastName: '',
              langKey: getLocale(),
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .email()
                .required(),
              firstName: Yup.string().required(),
              lastName: Yup.string().required(),
              langKey: Yup.string().required(),
            })}
            onSubmit={registerUser}>
            {({ isValid, values, isSubmitting, status }) => {
              return status && status >= 200 && status < 300 ? (
                <View>
                  <View my={3}>
                    <TextInput
                      name="username"
                      type="email-address"
                      label="E-mail address"
                      value={values.username}
                      onChange={() => {}}
                      component={TextInput.Field}
                      disabled
                      width={1}
                    />
                  </View>
                  <View my={3} mx={3}>
                    <Text>
                      You will receive an e-mail with an activation link
                      shortly!
                    </Text>
                  </View>
                  <View my={3}>
                    <BaseButton
                      notInteractive
                      bg="success"
                      justifyContent="center">
                      Success!
                    </BaseButton>
                  </View>
                </View>
              ) : (
                <Form>
                  <DisplayError>{status}</DisplayError>
                  <View my={3}>
                    <Field
                      name="username"
                      type="text"
                      label="E-mail address"
                      component={TextInput.Field}
                      width={1}
                    />
                  </View>
                  <View my={3}>
                    <Field
                      name="firstName"
                      type="text"
                      label="First name"
                      width={1}
                      component={TextInput.Field}
                    />
                  </View>
                  <View my={3}>
                    <Field
                      name="lastName"
                      type="text"
                      label="Last name"
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

export { Register }
