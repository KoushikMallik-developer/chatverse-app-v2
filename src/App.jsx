import { useState } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
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

function App() {
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
