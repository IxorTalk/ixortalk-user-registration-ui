// @flow
import styled from '@emotion/styled'
import withProps from 'recompose/withProps'
import { Flex } from '../Container'

export const InputGroup = withProps(props => ({
  px: { sm: 1, md: 3 },
  py: 3,
  ...props,
}))(
  styled(Flex)(
    {
      borderRadius: 8,
      border: 'solid 1px',
      backgroundColor: 'white',
    },
    ({ theme: { colors } }) => ({
      borderColor: colors.lights[1],
    }),
  ),
)
