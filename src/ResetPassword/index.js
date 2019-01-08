// @flow
import * as React from 'react'
import { Form, Field, Formik } from 'formik'
import {
  Background,
  Absolute,
  Card,
  View,
  Heading,
  Button,
  TextInput,
} from '../Components'

type Props = {}

const ResetPassword = (props: Props) => {
  return (
    <Background>
      <Absolute
        top="50%"
        left={0}
        right={0}
        style={{ transform: 'translateY(-50%)' }}>
        <Card mx="auto" width={512} py={3} px={4}>
          <View my={3} ml={3}>
            <Heading>Register</Heading>
          </View>
          <Form>
            <View my={3}>
              <Field
                name="login"
                type="text"
                label="E-mail address"
                width={1}
                component={TextInput.Field}
              />
            </View>
            <View my={3}>
              <Field
                name="firstName"
                type="text"
                label="First name"
                component={TextInput.Field}
                width={1}
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
              <Button type="submit">Submit</Button>
            </View>
          </Form>
        </Card>
      </Absolute>
    </Background>
  )
}

export { ResetPassword }
