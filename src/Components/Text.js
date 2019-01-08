// @flow
import styled from '@emotion/styled'
import { colo } from 'styled-system'

const Text = styled('p')(
  {
    padding: 0,
    margin: 0,
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
  ({ theme, color }) => ({
    color: theme.colors[color] || color || theme.colors.text,
  }),
)

const Heading = styled(Text.withComponent('h2'))(({ theme }) => ({
  fontSize: 24,
  fontWeight: 'bold',
}))

export { Text, Heading }
