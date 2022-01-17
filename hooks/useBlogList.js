import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/auth.action';
import ApiManager from '../api-manager';

export const useBlogList = props => {
    const [blogItemsArray, setBlogItemsArray] = useState([])
    const [blogCategoryArray, setBlogCategoryArray] = useState([])
    const router = useRouter()

    useEffect(() => {
        var authtoken = localStorage.getItem('authorization')
        authtoken = JSON.parse(authtoken)
        if (!authtoken) {
            router.push('/')
        }
    }, [])

    const blogItems = [];
    useEffect(() => {
        getBlogCategory()
    }, [])

    useEffect(() => {
        getBlogList()
    }, [])

    const getBlogCategory = () => {
        const payload = {
            endpoint: '/blog/categories',
            methodType: 'GET',
            parameters: {
                skip: 0,
                limit: 100
            }
        }
        ApiManager(payload, resolve => {
            setBlogCategoryArray(resolve)
            console.log("getBlogCategoryresolve", resolve)
        }, error => {
            console.log("getBlogCategoryerror", error)
        })
    }

    const getBlogList = () => {
        const payload = {
            endpoint: '/blog/blogs',
            methodType: 'GET',
            parameters: {
                skip: 0,
                limit: 100
            }
        }

        ApiManager(payload, resolve => {
            setBlogItemsArray(resolve)
            console.log("getBlogListresolve", resolve)
        }, error => {
            console.log("getBlogListerror", error)
        })
    }
    const openNewCategoyForm = () => {
        document.getElementById("newcategoryForm").style.display = "block";
        document.getElementById("newBlogform").style.display = "none";

    }
    const closeNewCategoyForm = () => {
        document.getElementById("newcategoryForm").style.display = "none";

    }

    const openNewBlogForm = () => {
        document.getElementById("newBlogform").style.display = "block";
        document.getElementById("newcategoryForm").style.display = "none";

    }
    const closeNewBlogForm = () => {
        document.getElementById("newBlogform").style.display = "none";

    }
    const handleCategorySubmit = useCallback((values) => {
        const payload = {
            endpoint: '/blog/category',
            body: JSON.stringify(values),
            methodType: 'POST',
            header: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        ApiManager(payload, resolve => {
            document.getElementById("newcategoryForm").style.display = "none";
            getBlogCategory()
        }, error => {
            console.log("getBlogCategoryerror", error)
        })


    }, [])
    const handleBlogSubmit = useCallback((values) => {
        const payload = {
            endpoint: '/blog/blog',
            body: JSON.stringify(values),
            methodType: 'POST',
            header: { 'Content-Type': 'application/json' }
        }
        ApiManager(payload, resolve => {
            document.getElementById("newBlogform").style.display = "none";
            getBlogList()
        }, error => {
            console.log("getBlogCategoryerror", error)
        })
    }, [])

    const logOut = useCallback(() => {
        var authtoken = localStorage.getItem('authorization')
        authtoken = JSON.parse(authtoken)

        const payload = {
            endpoint: '/auth/logout',
            body: JSON.stringify({ access_token: authtoken?.access_token }),
            methodType: 'POST',
            header: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        ApiManager(payload, resolve => {
            router.push('/')

        }, error => {
            console.log("getBlogCategoryerror", error)
        })
    }, [])
    return {
        blogItemsArray,
        blogCategoryArray,
        openNewCategoyForm,
        closeNewCategoyForm,
        openNewBlogForm,
        closeNewBlogForm,
        handleCategorySubmit,
        handleBlogSubmit,
        logOut
    }
}