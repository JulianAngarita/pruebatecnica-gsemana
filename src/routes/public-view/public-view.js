import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/home/home-page';
import UserPage from '../../pages/user/user-page';


const PublicView = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/create-user' element={<UserPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default PublicView;