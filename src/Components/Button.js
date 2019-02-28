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
import * as React from 'react'
import styled from '@emotion/styled'
import { color } from 'styled-system'
import { tint, shade } from 'polished'
import { Text } from './Text'
import { FocusOutline } from './Input'

const Button = styled(Text.withComponent('button'))(
  {
    height: 48,
    borderRadius: 4,
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
      backgroundColor: props.disabled
        ? props.theme.colors.disabled
        : backgroundColor,
      color: textColor,
      cursor: props.notInteractive || 'pointer',
      '&:hover': props.notInteractive || {
        backgroundColor: tint(0.3, backgroundColor),
      },
      '&:active': props.notInteractive || {
        backgroundColor: shade(0.3, backgroundColor),
      },
    }
  },
)

const ButtonWithOutline = (props: { onClick?: () => any }) => (
  <FocusOutline inline borderRadius={4}>
    <Button {...props} />
  </FocusOutline>
)

export { ButtonWithOutline as Button, Button as BaseButton }
