// @flow
// @jsx jsx
import { jsx } from '@emotion/core'
import * as React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'
import getLocale from 'get-user-locale'
import {
  TextInput,
  Grid,
  Col,
  Heading,
  Button,
  DisplayError,
  Spinner,
  SuccessAlert,
} from '../Components'

type FormValues = {
  username: string,
  firstName: string,
  lastName: string,
  langKey: string,
}

const registerUser = async (values: FormValues, form) => {
  form.setStatus(null)
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
        const children =
          status && status >= 200 && status < 300 ? (
            <>
              <Col my={3}>
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
              </Col>
              <Col>
                <SuccessAlert>
                  You will receive an e-mail with an activation link shortly!
                </SuccessAlert>
              </Col>
            </>
          ) : (
            <>
              <Col mb={2}>
                <DisplayError>{status}</DisplayError>
              </Col>
              <Col my={1}>
                <Field
                  name="username"
                  type="text"
                  label="E-mail address"
                  component={TextInput.Field}
                  width={1}
                />
              </Col>
              <Col my={1} width={{ sm: 1, md: 1 / 2 }}>
                <Field
                  name="firstName"
                  type="text"
                  label="First name"
                  width={1}
                  component={TextInput.Field}
                />
              </Col>
              <Col my={1} width={{ sm: 1, md: 1 / 2 }}>
                <Field
                  name="lastName"
                  type="text"
                  label="Last name"
                  component={TextInput.Field}
                  width={1}
                />
              </Col>
              <Col my={2}>
                <Button
                  css={{ width: '100%' }}
                  type="submit"
                  size="large"
                  disabled={isSubmitting || !isValid}>
                  {isSubmitting ? <Spinner /> : 'Register'}
                </Button>
              </Col>
            </>
          )
        return (
          <Grid as={Form} maxWidth={480} py={3} px={4}>
            <Col my={3}>
              <Heading tier="3">Register</Heading>
            </Col>
            {children}
          </Grid>
        )
      }}
    </Formik>
  )
}

export { Register }
