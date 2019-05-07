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
import withProps from 'recompose/withProps'
import { color, backgroundColor } from 'styled-system'
import { layout, position, flexBox } from './styles'

export const Box = styled('div')(layout, position, color)
export const Flex = styled(Box)({ display: 'flex' }, flexBox)

export const Absolute = withProps({ position: 'absolute' })(Box)
export const Fixed = withProps({ position: 'fixed' })(Box)

export const Grid = withProps(({ maxWidth, gutter, ...props }) => {
  let invertedGutter
  if (Array.isArray(gutter)) gutter.map(v => -v)
  else if (typeof gutter === 'object')
    invertedGutter = Object.keys(gutter).reduce(
      (prev, k) => ({
        ...prev,
        [k]: -gutter[k],
      }),
      {},
    )
  else invertedGutter = -gutter

  return {
    ...props,
    mx: invertedGutter || {
      sm: -1,
      md: -12,
      xlg: -2,
    },
    maxWidth: maxWidth || {
      lg: 945,
      xlg: 1120,
    },
    flexWrap: 'wrap',
  }
})(Flex)

export const Col = withProps(({ gutter, ...props }) => ({
  width: 1,
  ...props,
  px: gutter || {
    sm: 1,
    md: 12,
    xlg: 2,
  },
}))(Flex)

export const ScrollView = styled(Box)(
  ({ horizontal }) => {
    if (horizontal) return { overflowX: 'auto' }
    return { overflowY: 'auto', overflowX: 'hidden' }
  },
  ({ theme }) => ({
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.charlestonGreen,
      borderRadius: 4,
    },
  }),
)

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
export const Pane: React.ComponentType<{
  borders?: ('top' | 'bottom' | 'left' | 'right')[],
}> = styled(Flex)(
  {
    backgroundColor: 'white',
  },
  ({ theme: { colors }, borders = [] }) => ({
    border: `${colors.lights[2]} 0px solid`,
    ...borders.reduce(
      (prev, key) => ({
        ...prev,
        [`border${capitalize(key)}Width`]: 1,
      }),
      {},
    ),
  }),
)
export const Card = styled(Flex)(
  {
    backgroundColor: 'white',
    boxShadow: `0 2px 16px 0 rgba(51, 61, 170, 0.08)`,
  },
  ({ size }) => ({
    borderRadius: size === 'small' ? 8 : 12,
  }),
  backgroundColor,
)
export const DataRow: React.ComponentType<{
  last?: boolean,
  children: React.Node,
}> = styled(Flex)(
  {
    height: 72,
    flexShrink: 0,
    padding: '0 24px',
    borderBottom: '1px solid transparent',
    alignItems: 'center',
    overflow: 'hidden',
  },
  ({ theme: { colors }, last }) => ({
    borderBottomColor: last || colors.lights[2],
  }),
)
