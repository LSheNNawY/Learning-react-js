import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";

// Yup schema
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    description: Yup.string()
        .min(10, 'Min length is 10 chars')
        .max(50, 'Max length is 50 chars')
});

const FormComponentUsingFormikAndYup = (props) => {
    return <div>
        <Formik
            initialValues={{
                'name': '',
                'email': '',
                'description': '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log(values);
                alert('Data sent!');
            }}
        >
            <Form>
                {/* name */}
                <div className="form-group">
                    <label htmlFor="name">Name</label> <br/>
                    <Field name='name' type='text' id='name'/>
                    <span className='error'>
                        <ErrorMessage name='name'/>
                    </span>
                </div>
                {/* email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label> <br/>
                    <Field name='email' type='email' id='email'/>
                    <span className='error'>
                        <ErrorMessage name='email'/>
                    </span>
                </div>
                {/* description */}
                <div className="form-group">
                    <label htmlFor="description">description</label> <br/>
                    <Field name='description' as="textarea" id='description' cols="30" rows="10"/>
                    <span className='error'>
                        <ErrorMessage name='description'/>
                    </span>
                </div>

                <button type="submit">Send</button>
            </Form>
        </Formik>
    </div>
}

export default FormComponentUsingFormikAndYup;