// @flow
// @jsx jsx
import { jsx } from '@emotion/core'
import * as React from 'react'
import * as Yup from 'yup'
import { Field, Formik, Form } from 'formik'
import {
  Button,
  Spinner,
  TextInput,
  Grid,
  Col,
  Heading,
  DisplayError,
  SuccessAlert,
} from '../Components'

type FormValues = {
  login: string,
}
const forgotPassword = async ({ login }: FormValues, form) => {
  form.setStatus(null)
  const { status } = await fetch('/uaa/api/account/reset_password/init', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: login,
  })
  form.setStatus(status)
  form.setSubmitting(false)
}

type Props = {}
export const ForgotPassword = (props: Props) => {
  return (
    <Formik
      onSubmit={forgotPassword}
      initialValues={{ login: '' }}
      validationSchema={Yup.object({
        login: Yup.string()
          .email()
          .required(),
      })}>
      {({ isSubmitting, isValid, status }) => {
        const children =
          status && status >= 200 && status < 300 ? (
            <>
              <Col my={3}>
                <SuccessAlert>
                  Your password has been reset. You'll receive an mail shortly.
                </SuccessAlert>
              </Col>
            </>
          ) : (
            <>
              <Col mb={2}>
                <DisplayError>
                  {status &&
                    'Something went wrong trying to reset your password.'}
                </DisplayError>
              </Col>
              <Col my={1}>
                <Field
                  name="login"
                  type="email-address"
                  label="E-mail address"
                  component={TextInput.Field}
                  width={1}
                />
              </Col>
              <Col my={2}>
                <Button
                  css={{ width: '100%' }}
                  size="large"
                  type="submit"
                  disabled={!isValid || isSubmitting}>
                  {isSubmitting ? <Spinner /> : 'Reset'}
                </Button>
              </Col>
            </>
          )
        return (
          <Grid as={Form} width={480} py={3} px={4}>
            <Col my={3}>
              <Heading tier="3">Forgot Password</Heading>
            </Col>
            {children}
          </Grid>
        )
      }}
    </Formik>
  )
}
