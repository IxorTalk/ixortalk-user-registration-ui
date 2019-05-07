// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { Flex } from './Container'
import { Title } from './Text'
import config from '../config'

const LogoImage = styled('div')({
  height: 100,
  margin: '0 auto',
  marginBottom: 24,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundImage: `url(${config.platformLogo})`,
})

const Logo = () => {
  return (
    <Flex>
      {config.platformLogo && <LogoImage />}
      {config.platformName && (
        <Title color="title">{config.platformName}</Title>
      )}
    </Flex>
  )
}

export { Logo }
