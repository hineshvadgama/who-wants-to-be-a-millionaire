import React, { createContext } from 'react';

export const RoundContext = createContext<number>(0);
export const RoundDispatchContext = createContext<React.Dispatch<{ type: string }> | null>(null);
