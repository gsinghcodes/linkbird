// context/UserContext.tsx
"use client";

import { createContext, useContext, ReactNode, useState } from "react";

type User = {
  id: string;               // primary key
  name: string;             // not null
  email: string;            // not null and unique
  emailVerified: boolean;   // default false, not null
  image?: string | null;    // optional
  createdAt: Date;          // default now, not null
  updatedAt: Date;          // default now, updated on change, not null
} | null;

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser?: User;
}) => {
  const [user, setUser] = useState<User>(initialUser || null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
