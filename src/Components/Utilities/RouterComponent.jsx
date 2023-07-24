import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import StudentsData from '../Pages/StudentData'
import ContactUs from '../Pages/ContactUs'
import ErrorPage from '../Pages/ErrorPage'

export const RouterComponent = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/students-data' element={<StudentsData/>} />
                <Route path='/contact-us' element={<ContactUs/>} />
                <Route path='/*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
