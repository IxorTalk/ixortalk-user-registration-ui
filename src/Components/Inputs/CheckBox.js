// @flow
//@jsx jsx
import { jsx } from '@emotion/core'
import * as React from 'react'
import styled from '@emotion/styled'
import { Label } from './Label'
import { Icon } from '../Icons'
import { isValid } from './'
import type { InputProps } from './'
import type { FieldProps } from 'formik'

type CheckBoxProps = $Diff<InputProps<boolean>, { value: boolean }> & {
  size?: 'medium' | 'large',
  required?: boolean,
  inverted?: boolean,
  className?: string,
  checked?: boolean,
  children: React.Node,
  idPrefix?: string,
}
const CheckBoxComponent = ({
  className,
  children,
  name,
  idPrefix,
  size,
  required,
  inverted,
  checked,
  onChange,
  ...props
}: CheckBoxProps) => {
  const id = idPrefix ? `${idPrefix}-${name}` : name
  return (
    <div className={className}>
      <input
        type="checkbox"
        name={name}
        id={id}
        {...props}
        onChange={e => {
          if (inverted) e.target.checked = !e.target.checked
          onChange(e)
        }}
        checked={inverted ? !checked : checked}
      />
      <div className="checkbox">
        <Icon icon={Icon.ICONS.Check} size={14} fill="white" color="white" />
      </div>
      <Label
        for={id}
        size={size}
        required={required}
        css={{ paddingLeft: 10, flex: 1 }}>
        {children}
      </Label>
    </div>
  )
}

const CheckBox: React.ComponentType<CheckBoxProps> & {
  Field: React.ComponentType<FieldProps>,
} = styled(CheckBoxComponent)(
  {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    input: {
      margin: 0,
      position: 'absolute',
      top: '50%',
      left: 0,
      appearance: 'none',
      width: 18,
      height: 18,
      outline: 'none',
      transform: 'translateY(-50%)',
    },
    '.checkbox': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      width: 18,
      height: 18,
      borderRadius: 4,
      transition: 'background-color .2s ease',
      svg: {
        opacity: 0,
        transition: 'opacity .2s ease',
        path: { fill: 'white' },
      },
      ':after': {
        pointerEvents: 'none',
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        width: 18,
        height: 18,
        borderRadius: 3,
        transform: 'scale(0.85)',
        transition: 'background-color .2s ease, transform .2s ease',
      },
    },
  },
  ({ theme: { colors }, value }) => ({
    '.checkbox': {
      backgroundColor: colors.lights[0],
      ':after': {
        backgroundColor: 'white',
        transform: 'scale(0.85)',
      },
    },
    'input:hover + .checkbox': {
      backgroundColor: colors.primary[0],
      ':after': {
        backgroundColor: colors.lights[2],
        transform: 'scale(0.75)',
      },
    },
    'input:checked + .checkbox': {
      backgroundColor: colors.primary[0],
      svg: { opacity: 1 },
      ':after': {
        backgroundColor: 'white',
        transform: 'scale(0)',
      },
    },
  }),
)

const asField = <Props: {}>(
  Input: React.ComponentType<Props>,
): React.ComponentType<Props & FieldProps> => props => {
  const {
    field: { value, ...field },
    form: { errors, touched },
    ...inputProps
  } = props
  return (
    <Input
      {...field}
      error={isValid(field.name, { errors, touched })}
      checked={value}
      {...inputProps}
    />
  )
}
CheckBox.Field = asField((CheckBox: any))

export { CheckBox }
