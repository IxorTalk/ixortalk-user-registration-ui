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
