import { createContext } from 'react';

const defaultUserState = {
    user: null,
};

export const UserContext = createContext(defaultUserState)