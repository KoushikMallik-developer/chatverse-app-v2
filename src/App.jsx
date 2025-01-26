import { useEffect } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/Homepage/index.jsx'
import Auth from './pages/Auth/index.jsx'
import { FeaturesPage } from './pages/Features/index.jsx'
import { AboutPage } from './pages/About/index.jsx'
import { ContactPage } from './pages/Contact/index.jsx'
import { PricingPage } from './pages/Pricing/index.jsx'
import PublicLayout from './pages/PublicLayout/index.jsx'
import ProtectedRoute from './pages/ProtectedRoute/index.jsx'
import WorkspaceListPage from './pages/WorkspaceListPage/index.jsx'
import ChatArea from './pages/ChatAreaLayout/index.jsx'
import Profile from './pages/Profile/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { resetMessages } from './store/slices/authSlice.js'
import {
    clearSocketListeners,
    initializeSocketListeners,
    resetSearchResult,
    setUserOnline,
} from './store/slices/chatSlice.js'
import { cleanActiveChannel } from './store/slices/channelSlice.js'

function App() {
    const dispatch = useDispatch()
    const location = useLocation()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(resetMessages()) // Reset messages on route change
        dispatch(resetSearchResult())
        dispatch(cleanActiveChannel())
    }, [location.pathname, dispatch]) // Trigger when route changes

    useEffect(() => {
        console.log('initilaizing socket listeners')
        initializeSocketListeners(dispatch)
        return () => {
            console.log('clearing socket listeners')
            clearSocketListeners()
        }
    }, [])

    useEffect(() => {
        if (user?._id) {
            dispatch(setUserOnline(user._id))
        }
    }, [user])

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                        padding: '10px',
                    },
                }}
            />
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/auth" element={<Auth />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/workspace/:id" element={<ChatArea />} />
                    <Route element={<PublicLayout />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route
                            path="/workspaces"
                            element={<WorkspaceListPage />}
                        />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
