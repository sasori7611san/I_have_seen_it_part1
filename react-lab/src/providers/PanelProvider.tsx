import React, { createContext } from 'react';

export const PanelContext: any = createContext({});
export const PanelProvider = (props: any) => {
  let choiceColorNo: number = 0;
  const { children } = props;
  return (
    <PanelContext.Provider value={{ choiceColorNo }}></PanelContext.Provider>
  );
};
