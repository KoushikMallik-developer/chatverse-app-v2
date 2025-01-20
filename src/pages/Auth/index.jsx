import React, { useState } from 'react'
import Register from '../../components/Auth/Register/index.jsx'
import Login from '../../components/Auth/Login/index.jsx'
import VerifyOTPForm from '../../components/Auth/VerifyOTPForm/index.jsx'
import ForgetPasswordForm from '../../components/Auth/ForgetPasswordForm/index.jsx'
import ChangePasswordForm from '../../components/Auth/ChangePasswordForm/index.jsx'
import AuthToggle from '../../components/Auth/AuthToggle/index.jsx'
import BackButton from '../../components/Auth/BackButton/index.jsx'
import Header from '../../components/Header/index.jsx'

const Auth = () => {
    const [currentForm, setCurrentForm] = useState('login')

    const renderBackButton = () => (
        <BackButton setCurrentForm={setCurrentForm} />
    )

    const renderAuthToggle = () => (
        <AuthToggle currentForm={currentForm} setCurrentForm={setCurrentForm} />
    )

    const renderLoginForm = () => <Login setCurrentForm={setCurrentForm} />

    const renderRegisterForm = () => (
        <Register setCurrentForm={setCurrentForm} />
    )

    const renderVerifyOtpForm = () => (
        <>
            {renderBackButton()}
            <VerifyOTPForm setCurrentForm={setCurrentForm} />
        </>
    )

    const renderForgotPasswordForm = () => (
        <>
            {renderBackButton()}
            <ForgetPasswordForm setCurrentForm={setCurrentForm} />
        </>
    )

    const renderChangePasswordForm = () => (
        <>
            {renderBackButton()}
            <ChangePasswordForm setCurrentForm={setCurrentForm} />
        </>
    )

    const renderCurrentForm = () => {
        switch (currentForm) {
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

    return (
        <div>
            <Header />
            <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
                <div className="max-w-md w-full space-y-8 bg-neutral-800 p-8 rounded-lg border border-neutral-700">
                    {['login', 'register'].includes(currentForm) &&
                        renderAuthToggle()}
                    {renderCurrentForm()}
                </div>
            </div>
        </div>
    )
}

export default Auth
