import type { NextPage } from 'next'
import {Fragment} from 'react';
import Head from 'next/head';

// Pages
import HomePage from '../src/pages/HomePage.component';

const Home: NextPage = () => {
  return (
     <Fragment>
        <Head>
           <title>Mikolaj Ulikowski</title>
           <meta name="description" content="Mikolaj Ulikowski digital marketer" />
        </Head>
        <HomePage />
     </Fragment>
     
  )
}

export default Home


