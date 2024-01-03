import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import './tailwind.css';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Loading from './components/Layout/components/Loading';
import { AuthContextProvider } from './context/AuthContext';
import { SongContextProvider } from './context/SongContext';
const App = lazy(() => import('./App'));
const GlobalStyles = lazy(() => import('./components/GlobalStyles'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback={<Loading />}>
            <GlobalStyles>
                <AuthContextProvider>
                    <SongContextProvider>
                        <App />
                    </SongContextProvider>
                </AuthContextProvider>
            </GlobalStyles>
        </Suspense>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
