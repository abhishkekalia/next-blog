import { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/auth.action'
import ApiManager from '../api-manager/index'

export const useSignup = () => {
    
    const dispatch = useDispatch()
    
    const select = useSelector((state) => state);
    
    const intlTelInputRef = useRef(null);

    const router = useRouter()

    const handleSubmit = useCallback(async (values) => {
        values.phone = intlTelInputRef.current.state.value
        const payload = {
            endpoint: '/auth/signup',
            body: JSON.stringify(values),
            methodType: 'POST',
            header: { 'Content-Type': 'application/json' }
        }
        
        console.log("handleSubmit", payload)

        ApiManager(payload, resolve => {
            console.log("useLoginselect", resolve)
            router.push('/')
        }, error => {
            console.log("useLoginselect", error)    
        })
    }, [])

    const handleSigninNavigation = useCallback(() => {
        router.push('/')
    }, [])

    return {
        handleSubmit,
        handleSigninNavigation,
        intlTelInputRef
    }
}
