import { useState, useEffect, createContext } from 'react';
import { instance } from '../apis/axios.instance';
import { useToast } from '@chakra-ui/react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const toast = useToast();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
