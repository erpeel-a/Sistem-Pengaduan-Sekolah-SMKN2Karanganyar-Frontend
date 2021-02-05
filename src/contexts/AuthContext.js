import { useState, useEffect, createContext } from 'react';
import { instance } from '../apis/axios.instance';

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
    instance
      .post(
        '/logout',
        { email: user.email, password: user.password },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(response => console.log(response))
      .catch(error => console.log(error));
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
