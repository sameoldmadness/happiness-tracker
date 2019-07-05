import React, { createContext, useState } from 'react';

// import Rebase from 're-base';
// import firebase from 'firebase';

// const app = firebase.initializeApp({
//   apiKey: 'AIzaSyASqKTr-MABT7tZdPfVCuVUgT2Nso0g2Bg',
//   authDomain: 'happiness-tracker-eca2c.firebaseapp.com',
//   databaseURL: 'https://happiness-tracker-eca2c.firebaseio.com',
//   projectId: 'happiness-tracker-eca2c',
//   storageBucket: '',
//   messagingSenderId: '108229354489',
//   appId: '1:108229354489:web:2314fa49f4b54981',
// });

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
