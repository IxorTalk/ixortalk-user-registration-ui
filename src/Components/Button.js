// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { color } from 'styled-system'
import { tint, shade } from 'polished'
import { Text } from './Text'
import { FocusOutline } from './Input'

const Button = styled(Text.withComponent('button'))(
  {
    height: 48,
    borderRadius: 24,
    border: 'none',
    padding: '0 24px',
    fontWeight: 'bold',
    outline: 'none',
    transition: 'background-color .2s ease',
  },
  props => {
    const {
      backgroundColor = props.theme.colors.button,
      color: textColor = props.theme.colors.buttonText,
    } = color(props)
    return {
      backgroundColor,
      color: textColor,
      '&:hover': { backgroundColor: tint(0.3, backgroundColor) },
      '&:active': { backgroundColor: shade(0.3, backgroundColor) },
    }
  },
)

const ButtonWithOutline = (props: { onClick?: () => any }) => (
  <FocusOutline inline borderRadius={24}>
    <Button {...props} />
  </FocusOutline>
)

export { ButtonWithOutline as Button }
