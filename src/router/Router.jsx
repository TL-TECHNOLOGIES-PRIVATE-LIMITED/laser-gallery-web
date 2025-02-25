import React from 'react'
import { Routes, Route } from 'react-router'
import Indexpage from '../pages/Indexpage/Indexpage'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Indexpage />} />
        </Routes>
    )
}

export default Router
