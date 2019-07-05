import React, { createContext, useState } from 'react';

export const Context = createContext({});

type ProviderProps = {
  children: any;
};

export const Provider = (props: ProviderProps) => {
  const { children } = props;
  const [votes, setVotes] = useState([]);
  // const rebase = Rebase.createClass(app.database());

  const contextValue = {
    votes,
    setVotes,
    // rebase,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
