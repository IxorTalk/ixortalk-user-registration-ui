// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { Fixed } from '../Components'
import config from '../config'

const Logo = styled('div')({
  height: 40,
  width: '100%',
  background: `url(${config.platformLogo}) left no-repeat`,
  backgroundSize: 'contain',
})
const TopBarContainer = styled(Fixed)(
  {
    display: 'flex',
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    backgroundColor: 'white',
    borderBottom: '1px solid',
    alignItems: 'center',
    zIndex: 999,
  },
  ({ theme: { colors } }) => ({ borderBottomColor: colors.lights[2] }),
)

export const TopBar = () => (
  <TopBarContainer px={3}>
    <Logo />
  </TopBarContainer>
)
