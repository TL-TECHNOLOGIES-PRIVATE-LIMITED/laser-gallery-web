import React from 'react'
import { Routes, Route } from 'react-router'
import Indexpage from '../pages/Indexpage/Indexpage'
import Nopage from '../pages/Nopage/Nopage'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Indexpage />} />
            <Route path="*" element={<Nopage />} />
        </Routes>
    )
}

export default Router
