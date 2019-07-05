import React, { useContext, useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend,
} from 'recharts';
import firebase from '../utils/firebase';
import { Context } from './Context';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

import styled from '@emotion/styled';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Chart = () => {
  // @ts-ignore
  const context = useContext(Context);
  // const { rebase } = context as any;
  const [votes, setVotes] = useState([]);

  const db = firebase.database();

  const getVotes = async () => {
    const votesRef = await db.ref('/happiness/2019-07-05/roman_paradeev');
    console.log('votesRef:', votesRef);
    votesRef.once('value', (snapshot: any) => {
      console.log('hi');
      console.log(snapshot);
      setVotes(snapshot.val() || []);
    });
    console.log('votes:', votes);
  };

  useEffect(() => {
    getVotes();
    // console.log('votes:', votes);
  }, []);

  // useEffect(() => {
  //   console.log('context2', context);
  //   const { rebase } = context as any;
  //   rebase.bindToState('happiness', {
  //     context: () => {},
  //     state: 'votes',
  //     asArray: true,
  //   });
  // }, []);

  return (
    <Wrapper>
      <LineChart width={500} height={500} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="uv" stroke="#123644" strokeWidth={3} />
      </LineChart>
    </Wrapper>
  );
};

export default Chart;
