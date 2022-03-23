import React from 'react';
import { Field, ErrorMessage } from 'formik';
// import TextError from './TextError'

export default function Select (props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as='select' className="form-control" id={name} name={name} {...rest} >
        {
          options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            )
          })
        }
      </Field>
      <ErrorMessage component="div" name={name} className="error" />
    </div>
  )
}