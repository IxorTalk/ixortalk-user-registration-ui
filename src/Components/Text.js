// @flow
import styled from '@emotion/styled'

const Text = styled('p')(
  {
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
  ({ theme }) => ({
    color: theme.colors.text,
  }),
)

const Heading = styled(Text.withComponent('h2'))(({ theme }) => ({
  fontSize: 24,
  fontWeight: 'bold',
}))

export { Text, Heading }
