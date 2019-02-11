// @flow
import styled from '@emotion/styled'

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
const Title = styled(Text.withComponent('h1'))({
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center',
})

export { Text, Heading, Title }
