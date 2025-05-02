import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dashboardVisible, setDashboardVisible] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, dashboardVisible, setDashboardVisible }}
    >
      {children}
    </UserContext.Provider>
  );
};
