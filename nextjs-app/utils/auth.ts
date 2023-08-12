```typescript
import { Session, signIn, signOut } from 'next-auth/client';

export const login = (email: string, password: string) => {
  return signIn('credentials', { email, password });
};

export const logout = () => {
  return signOut();
};

export const getSession = async (): Promise<Session | null> => {
  const session = await fetch('/api/auth/session');
  const data = await session.json();
  return data;
};

export const hasAccess = (session: Session | null, level: string): boolean => {
  if (!session) return false;
  return session.user?.accessLevel === level;
};
```