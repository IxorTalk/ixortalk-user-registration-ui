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
import {
  compose,
  // layout
  space,
  display,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  verticalAlign,
  //flex
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  flex,
  flexWrap,
  flexBasis,
  flexDirection,
  justifySelf,
  alignSelf,
  order,
  // typo
  fontSize,
  fontWeight,
  textAlign,
  letterSpacing,
  lineHeight,
  // position
  position as positionStyle,
  top,
  left,
  right,
  bottom,
} from 'styled-system'
import { tint, shade } from 'polished'

export const layout = compose(
  space,
  display,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  verticalAlign,
  width,
)
export const flexBox = compose(
  () => ({ display: 'flex' }),
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  flex,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
)
export const typography = compose(
  fontSize,
  fontWeight,
  textAlign,
  verticalAlign,
  letterSpacing,
  lineHeight,
)

export const position = compose(
  positionStyle,
  top,
  left,
  right,
  bottom,
)

type ColorStyles = {
  backgroundColor: ?string,
  color: ?string,
}

const withValidColor = (fn: string => string) => (color: ?string) => {
  if (!color || color === 'transparent') return color
  return fn(color)
}
export const interactiveColor = <Props: {}>(fn: Props => ColorStyles) => {
  return (props: Props) => {
    const { color, backgroundColor } = fn(props)
    const hover = withValidColor(tint(0.3))
    const active = withValidColor(shade(0.3))
    return {
      color,
      backgroundColor,
      transition: 'color .2s ease, background-color .2s ease',
      outline: 'none',
      ':hover': {
        // color: hover(color),
        backgroundColor: hover(backgroundColor),
      },
      ':active': {
        // color: active(color),
        backgroundColor: active(backgroundColor),
      },
    }
  }
}

export const outline = <
  Props: { borderRadius?: number, noOutline?: boolean, theme: any },
>({
  borderRadius,
  focus = true,
  prop,
}: {
  borderRadius?: number | (Props => number),
  focus?: boolean,
  prop?: string,
} = {}) => {
  return (props: Props) => {
    let {
      theme: { colors },
    } = props
    let br
    let focusStyle
    let outlineStyle
    if (typeof borderRadius === 'number') br = borderRadius
    else if (typeof borderRadius === 'function') br = borderRadius(props)
    if (typeof props.borderRadius === 'number') br = props.borderRadius
    else if (typeof props.borderRadius === 'function')
      br = props.borderRadius(props)

    if (focus)
      focusStyle = {
        '::before': {
          borderColor: 'Highlight',
        },
      }

    if (!props.noOutline)
      outlineStyle = {
        content: '" "',
        display: 'block',
        position: 'absolute',
        top: -3,
        bottom: -3,
        left: -3,
        right: -3,
        borderRadius: br ? br + 3 : 3,
        border: 'transparent 3px solid',
        borderColor:
          prop && props[prop]
            ? typeof props[prop] === 'string'
              ? colors[props[prop]] || props[prop]
              : 'Highlight'
            : 'transparent',
        transition: 'border-color .2s ease',
        pointerEvents: 'none',
      }

    return {
      position: 'relative',
      borderRadius: br,
      border: 'transparent solid 1.5px',
      '::before': outlineStyle,
      ':focus': focusStyle,
    }
  }
}
