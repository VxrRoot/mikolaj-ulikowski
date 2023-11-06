import type { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import { request } from "../src/lib/datocms";

// Utility
import { PageSeo } from "../src/utility/seo/PageSeo.component";

// Hooks
import UseContentSeo from "../src/hooks/UseContentSeo.hook";

// Pages
import HomePage from "../src/pages/HomePage.component";

// Query
import { QUERY } from "../src/graphql/getData.query";

// Model
import { ModelGetQuery } from "../src/models/getDataQuery.model";

export async function getServerSideProps() {
  const data = await request({
    query: QUERY,
  });

  return {
    props: {
      data,
    },
  };
}

const Home: NextPage<ModelGetQuery> = ({ data }) => {
  const { pageIndex } = UseContentSeo();

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageSeo page={pageIndex} />
      <HomePage data={data} />
    </Fragment>
  );
};

export default Home;
