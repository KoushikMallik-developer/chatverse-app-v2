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

function App() {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            {/*<Navbar />*/}
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
                    <Route path="/workspaces" element={<WorkspaceListPage />} />
                    {/*    <Route path="/workspace/:id" element={<Dashboard />} />*/}
                </Route>
            </Routes>
        </>
    )
}

export default App
