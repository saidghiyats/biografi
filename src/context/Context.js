import React, { useState } from 'react';

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState('translate-x-[-20rem]');

  return (
    <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>
  );
};
