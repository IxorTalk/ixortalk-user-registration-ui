// @flow
import { path, split } from 'ramda'
export type InputProps<Val> = {
  name: string,
  onChange: (SyntheticEvent<HTMLInputElement>) => any,
  onBlur?: (SyntheticEvent<HTMLInputElement>) => any,
  value: Val,
}

export const error = (
  name: string,
  {
    errors,
    touched,
  }: { errors: { [string]: ?string }, touched: { [string]: boolean } },
) => path(split('.', name), touched) && path(split('.', name), errors)

export const isValid = (
  name: string,
  form: { errors: { [string]: ?string }, touched: { [string]: boolean } },
) => !!error(name, form)

export * from './TextInput'
export * from './CheckBox'
export * from './RadioButton'
export * from './InputGroup'
export * from './Label'
