import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type Role = 'admin' | 'common';

type AuthContextValue = {
  role: Role | null;
  isAuthenticated: boolean;
  signIn: (role: Role) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      role,
      isAuthenticated: role !== null,
      signIn: (newRole) => setRole(newRole),
      signOut: () => setRole(null),
    }),
    [role],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return ctx;
}
