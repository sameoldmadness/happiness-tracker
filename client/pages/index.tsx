import * as React from 'react';
import { NextPage } from 'next';
import Hero from '../components/Hero';
import Chart from '../components/Chart';

const IndexPage: NextPage = () => (
  <>
    <Hero />
    <Chart />
  </>
);

export default IndexPage;
