// @flow
import * as React from 'react'
import { Card } from './Container'
import { Text } from './Text'

const messages = {
  '400': 'Please check whether your information is correct.',
  '500': 'Something went wrong. Please try again later!',
}

type Props = {
  children?: number | string,
}
const DisplayError = (props: Props) => {
  if (!props.children) return null
  return (
    <Card width={1} py={14} px={24} bg="reds.1" color="white">
      <Text color="darks.0">
        {typeof props.children === 'number'
          ? messages[`${props.children}`]
          : props.children}
      </Text>
    </Card>
  )
}

export { DisplayError }
