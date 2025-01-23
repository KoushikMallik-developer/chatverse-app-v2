import React, { useEffect } from 'react'
import Register from '../../components/Auth/Register/index.jsx'
import Login from '../../components/Auth/Login/index.jsx'
import VerifyOTPForm from '../../components/Auth/VerifyOTPForm/index.jsx'
import ForgetPasswordForm from '../../components/Auth/ForgetPasswordForm/index.jsx'
import ChangePasswordForm from '../../components/Auth/ChangePasswordForm/index.jsx'
import AuthToggle from '../../components/Auth/AuthToggle/index.jsx'
import BackButton from '../../components/Auth/BackButton/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentAuthForm } from '../../store/slices/authSlice.js'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const { currentAuthForm, status_code, token, isLoggedIn } = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const renderBackButton = () => <BackButton />

    const renderAuthToggle = () => <AuthToggle />

    const renderLoginForm = () => <Login />

    const renderRegisterForm = () => <Register />

    const renderVerifyOtpForm = () => (
        <>
            {renderBackButton()}
            <VerifyOTPForm />
        </>
    )

    const renderForgotPasswordForm = () => (
        <>
            {renderBackButton()}
            <ForgetPasswordForm />
        </>
    )

    const renderChangePasswordForm = () => (
        <>
            {renderBackButton()}
            <ChangePasswordForm />
        </>
    )

    const renderCurrentForm = () => {
        switch (currentAuthForm) {
            case 'register':
                return renderRegisterForm()
            case 'verifyOtp':
                return renderVerifyOtpForm()
            case 'forgotPassword':
                return renderForgotPasswordForm()
            case 'changePassword':
                return renderChangePasswordForm()
            default:
                return renderLoginForm()
        }
    }

    useEffect(() => {
        if (isLoggedIn && token) {
            navigate('/workspaces')
        }
        if (status_code === 201) {
            dispatch(setCurrentAuthForm('verifyOtp'))
        }
    }, [status_code, token, isLoggedIn])

    return (
        <div>
            <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
                <div className="max-w-md w-full space-y-8 bg-neutral-800 p-8 rounded-lg border border-neutral-700">
                    {['login', 'register'].includes(currentAuthForm) &&
                        renderAuthToggle()}
                    {renderCurrentForm()}
                </div>
            </div>
        </div>
    )
}

export default Auth
