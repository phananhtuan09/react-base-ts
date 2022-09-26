import Input from '../../Components/Global/Input'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Login.scss'

interface inputProps {
  id: string
  name: string
  type: string
  onChange: Function
  onBlur: Function
  value: string
  error: any
}
function Login() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  const inputValues: inputProps[] = [
    {
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.firstName,
      error: formik.errors.firstName || '',
    },
    {
      id: 'lastName',
      name: 'lastName',
      type: 'text',
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.lastName,
      error: formik.errors.lastName || '',
    },
    {
      id: 'email',
      name: 'email',
      type: 'text',
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.email,
      error: formik.errors.email || '',
    },
  ]
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        {inputValues.map((value) => (
          <div className="form-group" key={value.id}>
            <label className="form-label" htmlFor={value.id}>
              {value.id[0].toLocaleUpperCase() + value.id.slice(1)}
            </label>
            <Input {...value} />
          </div>
        ))}

        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>
    </>
  )
}

export default Login
