// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { color, space } from 'styled-system'
import { Text } from './Text'

const ErrorContainer = styled(Text)(space, color, {
  borderRadius: 24,
  minHeight: 48,
})

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
    <ErrorContainer py={14} px={24} bg="error" color="white">
      {typeof props.children === 'number'
        ? messages[`${props.children}`]
        : props.children}
    </ErrorContainer>
  )
}

export { DisplayError }
