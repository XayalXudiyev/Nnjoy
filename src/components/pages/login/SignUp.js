import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css'

import { Link } from 'react-router-dom'



const LoginForm = () => {
  return (
    <Formik 
      initialValues={{ email: '', password: '' , firstName:'',lastName:'' }}
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

        if (!values.firstName) {
          errors.firstName = 'Field cannot be empty';}

         if (!values.lastName) {
            errors.lastName = 'Field cannot be empty';}

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 4));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='form d-flex flex-column w-50 m-auto mt-5 border border-info rounded p-4            '>
          <h1 className='text-center bg-'> Sign Up</h1>

          <label htmlFor='firstName' className='mt-3 fw-bold' >First Name</label>
          <Field type='text' className='form-control' name='firstName' />
          <ErrorMessage name='firstName' className='error' component='div' />

          <label htmlFor='lastName' className='mt-3 fw-bold' >Last Name</label>
          <Field type='text' className='form-control' name='lastName' />
          <ErrorMessage name='lastName' className='error' component='div' />

          <label htmlFor='email' className='mt-3 fw-bold' >Email</label>
          <Field type='email' className='form-control' name='email' />
          <ErrorMessage name='email' className='error' component='div' />


          <label htmlFor='password' className='mt-4 fw-bold'>Password</label>
          <Field type='password' className='form-control' name='password' />
          <ErrorMessage name='password' className='error' component='div' />

          <div className='d-flex ms-auto mt-2'>
                  <p className=''>Already a member?<Link className='text-decoration-none ' to='/login'>  Log in</Link></p>
           </div>

          <button type='submit' className='btn btn-primary mt-4'  disabled={isSubmitting}>
            Submit
          </button>




         
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
