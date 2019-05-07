// @flow
import styled from '@emotion/styled'
import { Flex } from './Container'

const Background = styled(Flex)(
  {
    height: '100%',
  },
  ({ theme }) => ({
    background: theme.colors.lights[2],
  }),
)

export { Background }
