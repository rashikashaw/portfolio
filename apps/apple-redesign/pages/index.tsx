import { Button } from '@portfolio/button';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Landing } from '../components/Landing';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Button label={'Test'} onClick={() => {}} />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
    </div>
  );
};

export default Home;
