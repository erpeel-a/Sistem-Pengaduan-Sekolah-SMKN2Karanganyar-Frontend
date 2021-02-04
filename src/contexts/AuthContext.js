import { useState, useEffect, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const clearUser = () => {
    sessionStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
