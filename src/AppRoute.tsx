import React from 'react';
// import React, { Suspense} from 'react';
// import React, { lazy, Suspense} from 'react';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import HomePage from 'page/home';
import Register from 'page/Register';
// const HomePage = lazy(() => import('./page/home'));

const AppRoute: React.FC = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                {/* <Suspense fallback={null}> */}
                    <Route path="/" 
                        element={<HomePage />} 
                    />
                    <Route path="/home" 
                        element={<HomePage />} 
                    />
                    <Route path="/register" 
                        element={<Register
                                    listData={null}
                                />} 
                    />
                {/* </Suspense> */}
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoute;
