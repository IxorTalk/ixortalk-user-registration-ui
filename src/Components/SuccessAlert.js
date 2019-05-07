// @flow
import * as React from 'react'
import { Card } from './Container'
import { Text } from './Text'

type Props = {
  children: React.Node,
}
export const SuccessAlert = (props: Props) => {
  return (
    <Card width={1} py={14} px={24} bg="teals.1" justifyContent="center">
      <Text color="darks.0">{props.children}</Text>
    </Card>
  )
}
