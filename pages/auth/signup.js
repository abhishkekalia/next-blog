import React, { Fragment } from "react";
import Layout from '../../components/Layout'
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useSignup } from '../../hooks/useSignup';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import Head from 'next/head';

const signup = () => {
    
    const { handleSigninNavigation, intlTelInputRef, handleSubmit } = useSignup()

    return (
        <Layout>
            <div className="col-md-6 bg-light">
                <Head>
                    <title>Sign up</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 mx-auto">
                                <h3 className="display-4">Sign up</h3>
                                <p className="text-muted mb-4">Sign up page</p>
                                <Formik
                                    initialValues={{
                                        first_name: "",
                                        last_name: "",
                                        email: "",
                                        password: "",
                                        confirm_password: ""
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >{({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    handleReset,
                                    isValid
                                }) => (
                                    <Form>
                                        <div className="mb-3">
                                            <input
                                                id="first_name"
                                                placeholder="First Name"
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                type="text"
                                                name="first_name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.first_name}
                                            />
                                            {errors.first_name && touched.first_name && errors.first_name}
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id="last_name"
                                                placeholder="Last Name"
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                type="text"
                                                name="last_name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.last_name}
                                            />
                                            {errors.last_name && touched.last_name && errors.last_name}
                                        </div>
                                        <div className="mb-3">
                                            <IntlTelInput
                                                ref={intlTelInputRef}
                                                fieldName="phone"
                                                fieldId="phone"
                                                containerClassName="intl-tel-input"
                                                inputClassName="form-control"
                                                handleInputChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                id="email"
                                                placeholder="Email address"
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            {errors.email && touched.email && errors.email}
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                placeholder="Password"
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                placeholder="Confirm Password"
                                                type="password"
                                                name="confirm_password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.confirm_password}
                                            />
                                            {errors.confirm_password && touched.confirm_password && errors.confirm_password}
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button
                                                onClick={handleSubmit}
                                                type="submit"
                                                disabled={!isValid}
                                                className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                            <button
                                                onClick={handleReset}
                                                type="button"
                                                disabled={!isValid}
                                                className="btn btn-secoundry btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                            >clear</button>
                                        </div>
                                    </Form>
                                )}
                                </Formik>
                                <div className="d-grid gap-2 mt-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                        onClick={handleSigninNavigation}
                                    >Sign in</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Layout>
    );
}
export default signup
const validationSchema = yup.object().shape({
    first_name: yup.string()
        .required("First Name is Required"),
    last_name: yup.string()
        .required("Last Name is required"),
    email: yup.string()
        .required("email is required"),
    password: yup.string()
        .required("password is required"),
    confirm_password: yup.string()
        .required("Confirm Password is required"),
});

