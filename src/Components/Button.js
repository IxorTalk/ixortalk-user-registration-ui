/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016-present IxorTalk CVBA
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// @flow
import styled from '@emotion/styled'
import { path } from 'ramda'
import { Link } from '@reach/router'
import withProps from 'recompose/withProps'
import { typography } from './styles'
import { ColoredLink } from './Text'
import { Flex } from './Container'
import type { Node, ComponentType } from 'react'

const StyledEmptyButton = styled(Flex.withComponent('button'))(
  {
    display: 'flex',
    background: 'transparent',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    opacity: 1,
    transition: 'opacity .2s ease',
  },
  ({ hover, theme: { colors } }) =>
    hover && {
      ':hover': {
        backgroundColor: hover ? path(hover.split('.'), colors) : hover,
      },
      transition: 'background-color .2s ease',
    },
  ({ disabled }) => disabled && { opacity: 0.6, cursor: 'not-allowed' },
)
const Base = styled(StyledEmptyButton)(
  typography,
  ({ colortype, theme: { colors } }) => {
    const borderStyle = {
      ':before': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: 'inherit',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: colors[`${colortype}-border`] || 'transparent',
        ':hover': {
          borderColor: colors[`${colortype}-border:hover`],
        },
      },
    }
    const background = colors[`${colortype}-bg`]
    if (/linear-gradient/.test(background)) {
      return {
        background,
        backgroundPosition: 'right',
        backgroundSize: '200%',
        color: colors[`${colortype}-color`],
        transition: 'background-position .2s ease, opacity .2s ease',
        ...borderStyle,
        ':hover': {
          backgroundPosition: 'left',
        },
      }
    }
    return {
      color: colors[`${colortype}-color`],
      background: colors[`${colortype}-bg`],
      transition:
        'color .2s ease, background-color .2s ease, border-color .2s ease, opacity .2s ease',
      ...borderStyle,
      ':hover': {
        color: colors[`${colortype}-color:hover`],
        background: colors[`${colortype}-bg:hover`],
      },
    }
  },
  {
    border: 'none',
    position: 'relative',
    outline: 'none',
    textDecoration: 'none',
  },
)

const StyledButton = styled(Base)(
  ({ size }) => {
    if (size === 'circle')
      return {
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 0,
        flexShrink: 0,
      }
    if (size === 'large')
      return {
        height: 48,
        borderRadius: 24,
        fontSize: 17,
        padding: '0 32px',
      }

    if (size === 'small')
      return {
        height: 32,
        borderRadius: 16,
        fontSize: 14,
        padding: '0 18px',
      }
    return {
      height: 40,
      borderRadius: 20,
      fontSize: 15,
      padding: '0 24px',
    }
  },
  {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
  },
)

const withButtonProps = withProps(
  ({
    to,
    colortype: c = 'primary',
    underConstruction,
    disabled,
    href,
    innerRef,
    ...props
  }) => {
    const colortype = `button-${c}`

    const underConstructionProps = underConstruction
      ? {
          onClick: () =>
            alert('This feature has not been implemented just yet!'),
        }
      : {}
    return {
      colortype,
      as: to ? Link : href ? 'a' : undefined,
      ref: innerRef,
      ...props,
      ...underConstructionProps,
    }
  },
)
const Button: ComponentType<{
  colortype?: 'primary' | 'secondary' | 'secondary-dark' | 'accent' | 'success',
  size?: 'circle' | 'large' | 'medium' | 'small',
  to?: string,
  href?: string,
  underConstruction?: boolean,
  onClick?: Event => any,
  children: Node,
}> = withButtonProps(Flex.withComponent(StyledButton))
const EmptyButton = withButtonProps(StyledEmptyButton)
const ButtonLink = styled(ColoredLink.withComponent(EmptyButton))({
  backgroundColor: 'transparent',
  paddingLeft: 0,
  paddingRight: 0,
})

export { Base, Button, EmptyButton, StyledButton, ButtonLink }
