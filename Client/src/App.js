import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment, useContext } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './context/AuthContext';

function App() {
    const { currentUser } = useContext(AuthContext);
    return (
        <Router>
            <div className="App">
                <ToastContainer />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {currentUser &&
                        privateRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
