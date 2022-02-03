import React, { Suspense } from 'react';
import Loading from '../components/Loading';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import routes from '../router/routes';

const Default = () => {
    console.log(routes)
    return (
        <div>
            <header>head</header>
            <main>
                <Suspense fallback={Loading}>
                    <Routes>
                        {
                            routes.map((route, index) => (
                                <Route
                                  key={index}
                                  path={route.path}
                                  element={<route.component />}
                                />
                            ))
                        }
                        <Route element={NotFound} />
                    </Routes>
                </Suspense>
            </main>
            <footer>footer</footer>
        </div>
    );
}

export default Default;
