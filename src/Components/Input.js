// @flow
import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { width } from 'styled-system'
import { shade, tint } from 'polished'
import { View } from './Container'
import { Text } from './Text'

const Outline = styled('div')({
  pointerEvents: 'none',
  borderRadius: 24,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  border: '5px solid Highlight',
})
const FocusOutline = ({
  borderRadius = 24,
  inline,
  children,
}: {
  borderRadius?: number,
  inline?: boolean,
  children: React.Node,
}) => {
  const [isFocused, setFocused] =
    // $FlowFixMe
    React.useState(false)
  const child =
    React.Children.only(children) && React.Children.toArray(children)[0]
  return (
    <View
      style={{
        position: 'relative',
        display: inline ? 'inline-block' : 'block',
      }}>
      {child &&
        React.cloneElement(child, {
          onBlur: e => {
            setFocused(false)
            child.props.onBlur && child.props.onBlur(e)
          },
          onFocus: e => {
            setFocused(true)
            child.props.onFocus && child.props.onFocus(e)
          },
        })}
      {isFocused && <Outline borderRadius={borderRadius} />}
    </View>
  )
}

const TextInput = styled('input')(
  {
    display: 'block',
    position: 'relative',
    height: 48,
    borderRadius: 24,
    fontSize: 18,
    padding: '0 24px',
    border: 'none',
    outline: 'none',
    transition: 'background-color .2s ease',
    overflow: 'visible',
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.textInput,
    '&:hover': {
      backgroundColor: tint(0.3, theme.colors.textInput),
    },
    '&:active': {
      backgroundColor: shade(0.3, theme.colors.textInput),
    },
  }),
  width,
)
const Label = styled(Text.withComponent('label'))({
  fontSize: 16,
})

type Props = {
  label: string,
  onBlur: Event => any,
  onFocus: Event => any,
}

const LabeledInput = ({ label, ...props }: Props) => {
  return (
    <View>
      <View my={1} mx={3}>
        <Label>{label}</Label>
      </View>
      <FocusOutline borderRadius={24}>
        <TextInput {...props} />
      </FocusOutline>
    </View>
  )
}

export { LabeledInput as TextInput, FocusOutline }
