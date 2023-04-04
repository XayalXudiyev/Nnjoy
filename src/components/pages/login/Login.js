import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css'

import { Link } from 'react-router-dom'



const LoginForm = () => {
  return (
    <Formik 
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Field cannot be empty ';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Field cannot be empty';
        } else if (values.password.length < 8) {
          errors.password = 'Password must be at least 8 characters';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='form d-flex flex-column w-50 m-auto mt-5 border border-info rounded p-4            '>
          <h1 className='text-center bg-'> Log in</h1>

          <label htmlFor='email' className='mt-3' >Email</label>
          <Field type='email' className='form-control' name='email' />
          <ErrorMessage name='email' className='error' component='div' />


          <label htmlFor='password' className='mt-4'>Password</label>
          <Field type='password' className='form-control' name='password' />
          <ErrorMessage name='password' className='error' component='div' />


        <div className='mt-2 '> <a href='#' className='text-decoration-none'>Forgot password?</a> </div>
          <button type='submit' className='btn btn-primary mt-4'  disabled={isSubmitting}>
            Submit
          </button>




          <div className='d-flex ms-auto mt-2'>
                  <p className=''>Don't have an account?<Link className='text-decoration-none ' to='/signUp'>  Sign up</Link></p>
           </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
