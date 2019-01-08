// @flow
import * as React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { width } from 'styled-system'
import { shade, tint } from 'polished'
import { View } from './Container'
import { Text } from './Text'
import type { FieldProps, FormikProps } from 'formik'

const Outline = styled('div')(
  {
    pointerEvents: 'none',
    position: 'absolute',
    top: -5,
    right: -5,
    bottom: -5,
    left: -5,
    border: '5px solid Highlight',
    transition: 'border-color .2s ease',
  },
  ({ borderRadius }) => ({
    borderRadius: borderRadius + 10,
  }),
  ({ theme, color }) =>
    color && {
      borderColor: theme.colors[color] || color,
    },
)
const FocusOutline = ({
  borderRadius = 24,
  inline,
  error,
  children,
}: {
  borderRadius?: number,
  inline?: boolean,
  show?: boolean,
  error?: ?boolean,
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
      {(isFocused || error) && (
        <Outline
          color={error && !isFocused ? 'error' : 'Highlight'}
          borderRadius={borderRadius}
        />
      )}
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
  ({ theme, disabled }) => {
    const backgroundColor = theme.colors.textInput
    if (disabled) return { backgroundColor }
    return {
      backgroundColor,
      '&:hover': {
        backgroundColor: tint(0.3, theme.colors.textInput),
      },
      '&:active': {
        backgroundColor: shade(0.3, theme.colors.textInput),
      },
    }
  },
  width,
)
const Label = styled(Text.withComponent('label'))({
  fontSize: 16,
})

type InputProps = {
  label: string,
  value: string,
  onChange: (SyntheticEvent<HTMLInputElement>) => any,
  onBlur?: (SyntheticEvent<HTMLInputElement>) => any,
  onFocus?: (SyntheticEvent<HTMLInputElement>) => any,
  error?: ?string,
}

const mapProps = <Props: InputProps & FieldProps>({
  field,
  form,
  ...props
}: Props): InputProps => ({
  ...field,
  ...props,
  error:
    form.errors && form.touched[field.name] ? form.errors[field.name] : null,
})

const withField = (Component: React.ComponentType<InputProps>) => (
  props: InputProps & FieldProps,
) => <Component {...mapProps(props)} />

const LabeledInput = ({ label, ...props }: InputProps) => {
  return (
    <View>
      <View my={1} mx={3}>
        <Label color="label">{label}</Label>
      </View>
      <FocusOutline borderRadius={24} error={!!props.error}>
        <TextInput {...props} />
      </FocusOutline>
    </View>
  )
}
LabeledInput.Field = withField(LabeledInput)

export { LabeledInput as TextInput, withField, FocusOutline }
