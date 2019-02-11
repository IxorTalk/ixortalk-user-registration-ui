// @flow
import styled from '@emotion/styled'
import { width, space, top, bottom, left, right } from 'styled-system'

const View = styled('div')(width, space)
const Absolute = styled('div')(
  { position: 'absolute' },
  top,
  bottom,
  left,
  right,
)

export { View, Absolute }
