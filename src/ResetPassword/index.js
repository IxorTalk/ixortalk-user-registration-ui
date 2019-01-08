// @flow
import * as React from 'react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'
import { parse } from 'query-string'
import {
  Background,
  Absolute,
  Card,
  View,
  Heading,
  Button,
  TextInput,
  Text,
  DisplayError,
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
      <Absolute
        top="50%"
        left={0}
        right={0}
        style={{ transform: 'translateY(-50%)' }}>
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
                    <Button bg="success">Success!</Button>
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
      </Absolute>
    </Background>
  )
}

export { ResetPassword }
