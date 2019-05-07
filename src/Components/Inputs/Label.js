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
