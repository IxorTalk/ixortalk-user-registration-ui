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
    const resp = await fetch(`/uaa/api/activate?key=${key}`)
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
