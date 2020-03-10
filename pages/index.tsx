import * as React from 'react';
import { NextPage } from 'next';

type Props = {
  title: string;
};

const IndexPage: NextPage<Props> = ({ title }) => <div>Hello World! {title}</div>;

export default IndexPage;
