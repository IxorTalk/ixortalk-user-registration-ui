// @flow
import styled from '@emotion/styled'
import { Text } from '../Text'
import type { ComponentType } from 'react'

export const Label: ComponentType<{
  size?: 'medium' | 'large',
  required?: boolean,
  for: string,
}> = styled(Text.withComponent('label'))(
  ({ size }) =>
    size === 'large'
      ? {
          fontSize: 17,
          letterSpacing: -0.3,
          lineHeight: 1.53,
        }
      : {
          fontSize: 15,
          lineHeight: 1.33,
          letterSpacing: -0.2,
        },
  ({ theme: { colors } }) => ({
    color: colors.darks[3],
  }),
  ({ required }) =>
    required && {
      ':after': { content: '"*"' },
    },
)
