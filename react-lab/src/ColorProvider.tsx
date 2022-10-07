import { createContext, useState } from 'react';

export let ColorContext: React.Context<unknown> = createContext<unknown>(0);

export const ColorProvider = ({ children }: any): any => {
  const [color, setColor] = useState(0);
  return (
    <ColorContext.Provider value={[color, setColor]}>
      {children}
    </ColorContext.Provider>
  );
};
