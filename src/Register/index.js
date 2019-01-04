// @flow
import * as React from 'react'
import { withFormik, Field, Form } from 'formik'
import {
  Background,
  TextInput,
  Card,
  Absolute,
  View,
  Heading,
  Button,
  Text,
} from '../Components'
import type { FormikProps } from 'formik'

type FormValue = {
  login: string,
  firstName: string,
  lastName: string,
  langKey: string,
}
type Props = FormikProps<FormValue>

const Register = (props: Props) => {
  return (
    <Background>
      <Absolute
        top="50%"
        left={0}
        right={0}
        style={{ transform: 'translateY(-50%)' }}>
        <Card mx="auto" width={512} p={3}>
          <View my={3} ml={3}>
            <Heading>Register</Heading>
          </View>
          <Form>
            <View my={3}>
              <Field
                name="login"
                label="E-mail address"
                component={TextInput}
                width={1}
              />
            </View>
            <View my={3}>
              <Field
                name="firstName"
                label="First name"
                component={TextInput}
                width={1}
              />
            </View>
            <View my={3}>
              <Field
                name="lastName"
                label="Last name"
                component={TextInput}
                width={1}
              />
            </View>
            <View my={3}>
              <Button as="input" type="submit" value="Submit" />
            </View>
          </Form>
        </Card>
      </Absolute>
    </Background>
  )
}

const RegisterWithForm = withFormik({
  mapPropsToValues: () => ({}),
  handleSubmit: async values => {},
})(Register)

export { RegisterWithForm as Register }
