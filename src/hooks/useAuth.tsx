import React, { createContext, ReactNode, useContext, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

import {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE,
} from '../configs';
import { api } from '../services/api';

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
  isLoading: boolean;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn() {
    try {
      setIsLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      /**
        Object {
          "authentication": null,
          "errorCode": null,
          "params": Object {
            "access_token": "XkXTN8HLqO1W70N9oLPXI0u8722zg2",
            "exp://w8-8gp.anonymous.gameplay.exp.direct:80/--/expo-auth-session": "",
            "expires_in": "604800",
            "scope": "identify email connections guilds",
            "token_type": "Bearer",
          },
          "type": "success",
          "url": "exp://w8-8gp.anonymous.gameplay.exp.direct:80/--/expo-auth-session#token_type=Bearer&access_token=XkXTN8HLqO1W70N9oLPXI0u8722zg2&expires_in=604800&scope=identify+email+connections+guilds",
        }
       */
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');
        const firstName = userInfo.data.username.split(' ')[0];

        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token,
        });
      }
    } catch {
      throw new Error('Não foi possível realizar autenticação');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
