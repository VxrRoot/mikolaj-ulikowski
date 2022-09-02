import type { NextPage } from 'next'
import {Fragment} from 'react';
import Head from 'next/head';
import { request } from '../src/lib/datocms';

// Pages
import HomePage from '../src/pages/HomePage.component';

// Query
import {QUERY} from '../src/graphql/getData.query';

// Model
import { ModelGetQuery } from '../src/models/getDataQuery.model';

export async function getServerSideProps() {
	const data = await request({
      query: QUERY,
   })

	return {
		props: {
			data
		}
	}
}

const Home: NextPage<ModelGetQuery> = ({data}) => {
   return (
      <Fragment>
         <Head>
            <title>Mikolaj Ulikowski - SKUTECZNIE KREATYWNY MARKETING</title>
            <meta name="description" content="Mikolaj Ulikowski digital marketer" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
         <HomePage data={data} />
      </Fragment>
  );
}

export default Home



