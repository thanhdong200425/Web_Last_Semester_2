import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user')) || null,
    );
    const loginContextHandle = (data) => {
        sessionStorage.setItem('user', JSON.stringify(data));
        setCurrentUser(data);
    };
    return (
        <AuthContext.Provider value={{ currentUser, loginContextHandle }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
