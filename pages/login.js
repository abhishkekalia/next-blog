import React, { Fragment } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useLogin } from '../hooks/useLogin';
import Head from 'next/head';

const Login = () => {
    const { handleSignupNavigation, handleSubmit } = useLogin()
    return (
        <div className="col-md-6 bg-light">
            <Head>
                <title>Login</title>    
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">login</h3>
                            <p className="text-muted mb-4">login page</p>
                            <Formik
                                initialValues={{ username: "", password: "" }}
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
                                isValid
                            }) => (
                                <Form>
                                    <div className="mb-3">
                                        <input
                                            id="inputPassword"
                                            placeholder="Email address"
                                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                            type="username"
                                            name="username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                        />
                                        {errors.username && touched.username && errors.username}
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
                                    <div className="form-check">
                                        <input
                                            id="customCheck1"
                                            type="checkbox"
                                            // checked
                                            className="form-check-input" />
                                        <label
                                            className="form-check-label">Remember password</label>
                                    </div>
                                    <div className="d-grid gap-2 mt-2">
                                        <button
                                            onClick={handleSubmit}
                                            type="submit"
                                            disabled={!isValid}
                                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                    </div>
                                </Form>
                            )}
                            </Formik>
                            <div className="d-grid gap-2 mt-2">
                                <button
                                    type="button"
                                    className="btn btn-secoundry btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                    onClick={handleSignupNavigation}
                                >Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Login

const validationSchema = yup.object().shape({
    username: yup.string()
        .required("Required")
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
});
