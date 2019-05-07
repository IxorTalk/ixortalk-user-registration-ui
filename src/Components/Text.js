// @flow
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import withProps from 'recompose/withProps'
import { color } from 'styled-system'
import { typography } from './styles'
import type { ComponentType } from 'react'

export const Text = styled('p')(
  {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: 20,
    margin: 0,
  },
  ({ textTransform }) => ({ textTransform }),
  ({ transition }) => transition && { transition: 'color .2s ease' },
  color,
  typography,
)

const headingTierStyles = {
  '1': {
    fontSize: {
      sm: '40pt',
      md: '54pt',
      lg: '64pt',
    },
    lineHeight: {
      sm: 1.2,
      md: 1.19,
      lg: 1.25,
    },
    letterSpacing: {
      sm: '.34px',
      md: '.4px',
      lg: '.5px',
    },
  },
  '2': {
    fontSize: {
      sm: '32pt',
      md: '42pt',
      lg: '52pt',
    },
    lineHeight: {
      sm: 1.25,
      md: 1.19,
      lg: 1.23,
    },
    letterSpacing: {
      sm: '.32px',
      md: '.34px',
      lg: '.36px',
    },
  },
  '3': {
    fontSize: {
      sm: '28pt',
      md: '34pt',
      lg: '40pt',
    },
    lineHeight: {
      sm: 1.43,
      md: 1.18,
      lg: 1.2,
    },
    letterSpacing: {
      sm: '.28px',
      md: '.30px',
      lg: '.32px',
    },
  },
  '4': {
    fontSize: {
      sm: '24pt',
      md: '27pt',
      lg: '32pt',
    },
    lineHeight: {
      sm: 1.33,
      md: 1.26,
      lg: 1.25,
    },
    letterSpacing: {
      sm: '.24px',
      md: '.28px',
      lg: '.30px',
    },
  },
  '5': {
    fontSize: {
      sm: '20pt',
      md: '22pt',
      lg: '24pt',
    },
    lineHeight: {
      sm: 1.4,
      md: 1.36,
      lg: 1.33,
    },
    letterSpacing: {
      sm: '.16px',
      md: '.2px',
      lg: '.24px',
    },
  },
  '6': {
    fontSize: {
      sm: '18pt',
      md: '19pt',
      lg: '20pt',
    },
    lineHeight: {
      sm: 1.78,
      md: 1.68,
      lg: 1.4,
    },
    letterSpacing: {
      sm: '.12px',
      md: '.16px',
      lg: '.16px',
    },
  },
  '7': {
    fontSize: {
      sm: '16pt',
      md: '17pt',
      lg: '18pt',
    },
    lineHeight: {
      sm: 1.78,
      md: 1.68,
      lg: 1.4,
    },
    letterSpacing: {
      sm: '.12px',
      md: '.16px',
      lg: '.16px',
    },
  },
}

type HeadingProps = {
  tier?: '1' | '2' | '3' | '4' | '5' | '6' | '7',
  color?: string,
}
export const Heading: ComponentType<HeadingProps> = withProps(
  ({ tier = '1', color = 'text' }: HeadingProps) => {
    return {
      as: `h${tier}`,
      fontWeight: 'bold',
      color,
      ...headingTierStyles[tier],
    }
  },
)(Text)

export const Lead: ComponentType<{ color?: string }> = withProps(
  ({ color = 'text' }: { color?: string }) => ({
    color,
    fontSize: {
      sm: '20pt',
      md: '22pt',
      lg: '24pt',
    },
    lineHeight: {
      sm: 1.4,
      md: 1.45,
      lg: 1.42,
    },
    letterSpacing: '.16px',
  }),
)(Text)

export const Title: ComponentType<{ color?: string }> = withProps(
  ({ color = 'text' }: { color?: string }) => ({
    color,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '12pt',
    lineHeight: 1.62,
    letterSpacing: '.8px',
  }),
)(Text)

const bodyStyleSizes = {
  large: {
    fontSize: '17pt',
    lineHeight: 1.53,
    letterSpacing: '.32px',
  },
  medium: {
    fontSize: '15pt',
    lineHeight: 1.47,
    letterSpacing: '.24px',
  },
  small: {
    fontSize: '14pt',
    lineHeight: 1.43,
    letterSpacing: '.22px',
  },
  footnote: {
    fontSize: '13px',
    lineHeight: 1.62,
    letterSpacing: '0.08px',
  },
}
type BodyProps = {
  size?: 'footnote' | 'small' | 'medium' | 'large',
  color?: string,
}
export const Body: ComponentType<BodyProps> = withProps(
  ({ size = 'medium', color = 'text' }) => ({
    color,
    ...bodyStyleSizes[size],
  }),
)(Text)
export const ColoredLink = styled(Text.withComponent(Link))(
  {
    fontSize: 15,
    borderBottom: '1px solid',
  },
  ({ theme: { colors } }) => ({
    color: colors.primary[0],
    borderBottomColor: colors.primary[0],
  }),
)
