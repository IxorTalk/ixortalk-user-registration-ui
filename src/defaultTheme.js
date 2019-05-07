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
import { mergeDeepRight } from 'ramda'

const breakpoints: any = ['0em', '48em', '62em', '79em']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xlg = breakpoints[3]

const defaultPrimary = ['#0D769D', '#11a2d7', '#26AADA', '#E2E3F3']
const darks = ['#2C2F3C', '#404360', '#60637D', '#7F849D', '#9D9EB6']
const lights = ['#D4D6E3', '#E9E9F0', '#F0F2F6', '#F9FAFC', '#FCFCFD']
const teals = ['#27A0B3', '#34BACC', '#E2F5F7']
const reds = ['#D3364B', '#EA4762', '#FCE5E9']
const oranges = ['#EB8315', '#FF9F1C', '#FFF1DE']
const yellows = ['#E9A102', '#FCBA04', '#FEF5DB']
const blues = ['#262F8F', '#333DAA', '#E2E3F3']

export const createTheme = (theme: any = { colors: {} }) => {
  const primary = theme.colors.primary || defaultPrimary
  return mergeDeepRight(
    {
      colors: {
        primary,
        darks,
        lights,
        teals,
        reds,
        oranges,
        yellows,
        blues,

        text: darks[0],

        'button-primary-color': 'white',
        'button-primary-bg': `linear-gradient(to left,
      ${primary[2]}
      , 
      ${primary[1]}
      , 
      ${primary[0]}
      , 
      ${primary[0]}
      )`,

        'button-secondary-color': primary[0],
        'button-secondary-color:hover': primary[1],
        'button-secondary-bg': 'transparent',
        'button-secondary-border': lights[0],

        'button-secondary-dark-color': '#ffffff',
        'button-secondary-dark-bg': 'transparent',
        'button-secondary-dark-bg:hover': 'rgba(0, 0, 0, 0.1)',
        'button-secondary-dark-border': 'rgba(255, 255, 255, .64)',
        'button-secondary-dark-border:hover': '#ffffff',

        'button-accent-color': 'white',
        'button-accent-bg': reds[1],
        'button-accent-bg:hover': reds[0],

        'button-success-color': 'white',
        'button-success-bg': teals[1],
        'button-success-bg:hover': teals[0],
      },
      space: [0, 8, 16, 24, 32, 64],
      breakpoints,
    },
    theme,
  )
}
