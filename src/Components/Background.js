// @flow
import styled from '@emotion/styled'

const Background = styled('div')(
  {
    height: '100%',
  },
  ({ theme }) => ({
    background: theme.colors.background,
  }),
)

export { Background }
