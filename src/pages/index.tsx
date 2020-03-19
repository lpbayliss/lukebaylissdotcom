import * as React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/default';

const IndexPage: NextPage = () => {
  return (
    <DefaultLayout>
      <h1>Luke Bayliss</h1>
      <div>Welcome!</div>
    </DefaultLayout>
  );
};

export default IndexPage;
