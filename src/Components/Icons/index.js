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
import { width, height, style } from 'styled-system'
import { layout } from '../styles'

const fill = style({
  prop: 'fill',
  alias: 'color',
  key: 'colors',
  cssProperty: 'fill',
})

const ICONS = {}

type Props = {
  color?: string,
  size?: number,
  icon: React.ComponentType<*>,
}
const Icon = ({ color, icon: Svg, size, ...props }: Props) => {
  return <Svg {...props} height={size} width={size} />
}

const StyledIcon = styled(Icon)(layout, width, height, fill, {
  path: { fill: 'inherit' },
})

Icon.ICONS = ICONS
StyledIcon.ICONS = ICONS

export { StyledIcon as Icon }
