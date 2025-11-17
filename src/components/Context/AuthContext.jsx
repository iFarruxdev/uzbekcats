import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("userPhone");
    if (savedUser) setUser(savedUser);
  }, []);

  const login = (phone) => {
    localStorage.setItem("userPhone", phone);
    setUser(phone);
  };

  const logout = () => {
    localStorage.removeItem("userPhone");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
