import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/auth.action';
import ApiManager from '../api-manager/index';

export const useLogin = () => {

    const dispatch = useDispatch()

    const select = useSelector((state) => state);

    const router = useRouter()

    const handleSubmit = useCallback(async (values) => {
        var urlencoded = new URLSearchParams();
        urlencoded.append("username", "kabhi1792@gmail.com");
        urlencoded.append("password", "Admin@123");

        // Object.entries(values).map(([key, value], index) => {
        //     urlencoded.append(key, value);
        // })

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const payload = {
            endpoint: '/auth/token',
            methodType: 'POST',
            header: myHeaders,
            body: urlencoded
        }
        ApiManager(payload, resolve => {
            // const responsedata = JSON.parse(resolve)
            dispatch(actions.getAccessToken(resolve))
            localStorage.setItem('authorization', JSON.stringify(resolve));
            router.push('/homepage/blog/bloglist')

        }, error => {
            dispatch(actions.errorHandle(error))
        })
        // dispatch(actions.getAccessToken(values))
    }, [])

    const handleSignupNavigation = useCallback(() => {
        router.push('/auth/signup')
    }, [])

    return {
        handleSubmit,
        handleSignupNavigation
    }
}
