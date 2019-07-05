import * as React from 'react';
import { NextPage } from 'next';
import HeroHeadline from '../components/HeroHeadline';
import Chart from '../components/Chart';

const IndexPage: NextPage = () => (
  <>
    <HeroHeadline />
    <Chart />
  </>
);

export default IndexPage;
