import Head from 'next/head';
import { useMemo } from 'react';
import { useBlogList } from '../../../hooks/useBlogList'
import * as yup from "yup";
import { Formik, Form } from "formik";

const BlogList = props => {
    const { blogItemsArray, blogCategoryArray, openNewCategoyForm, openNewBlogForm, closeNewCategoyForm,
        closeNewBlogForm, handleCategorySubmit, handleBlogSubmit, logOut } = useBlogList();

    const renderBlogItems = useMemo(() => {
        return Array.from(blogItemsArray, (object, index) => {
            return (
                <div className="card__container" key={index.toString()}>
                    <div className="card">
                        <div className="card__content">
                            <img
                                className="card-img-top"
                                src={object.featured_image} />
                            <p className="card__info">{object.title}</p>
                            <p className="card__info">{object.body}</p>
                            {/* <button className="card__button">Read now</button> */}
                        </div>
                    </div>
                </div>
            )
        })
    }, [blogItemsArray])

    return (
        <div className="container">
            <button className="open-button" onClick={openNewCategoyForm}>Add category</button>
            <button className="open-button" onClick={openNewBlogForm}>Add Blog</button>
            <button className="open-button" onClick={logOut}>logOut</button>

            <Head>
                <title>Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {renderBlogItems}

            <div className="form-popup" id="newcategoryForm">
                <Formik
                    initialValues={{ name: "", description: "" }}
                    validationSchema={newcategoryFormSchema}
                    onSubmit={handleCategorySubmit}
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
                        <div className="form-container">
                            <label ><b>Name</b></label>
                            <input
                                type="text"
                                placeholder="Enter category name"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <span>{errors.name && touched.name && errors.name}</span>
                            <label><b>Description</b></label>
                            <input
                                type="text"
                                placeholder="Enter category description"
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            {errors.description && touched.description && errors.description}

                            <button type="button" className="btn" onClick={handleReset, handleSubmit}>Submit</button>
                            <button type="button" className="btn cancel" onClick={closeNewCategoyForm}>Close</button>
                        </div>
                    </Form>
                )}
                </Formik>

            </div>
            <div className="form-popup" id="newBlogform">
                <Formik
                    initialValues={{ is_featured: false, tags: [], title: "", body: "", featured_image: '', cat_id: '' }}
                    // validationSchema={newcategoryFormSchema}
                    onSubmit={handleBlogSubmit}
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
                        <div className="form-container">
                            <label><b>Blog Title</b></label>
                            <input
                                type="text"
                                placeholder="Enter blog title"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            <label><b>Blog Description</b></label>
                            <input
                                type="text"
                                placeholder="Enter blog description"
                                name="body"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.body}
                            />
                            <label><b>Feature image url</b></label>
                            <input
                                type="text"
                                placeholder="Enter blog description"
                                name="featured_image"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.featured_image}
                            />
                            <select
                                className="form-select form-select-lg mb-3"
                                aria-label="Default select example"
                                onChange={handleChange}
                                name='cat_id'>
                                <option value="">select category</option>)
                                {
                                    Array.from(blogCategoryArray, (object, index) => (<option value={object.uid} key={index.toString()}>{object.name}</option>))
                                }
                            </select>
                            <button type="button" onClick={handleSubmit} className="btn">Submit</button>
                            <button type="button" className="btn cancel" onClick={closeNewBlogForm}>Close</button>
                        </div>
                    </Form>
                )}
                </Formik>

            </div>
        </div>

    )
}
export default BlogList
const newcategoryFormSchema = yup.object().shape({
    name: yup.string()
        .required("Name is required"),
    description: yup.string()
        .required("Description is required")
});