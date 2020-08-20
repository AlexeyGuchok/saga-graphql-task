import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import AboutLayout from "../components/layouts/aboutLayout";

async function fetchAPI() {
  try {
    const response = await fetch("http://localhost:4001/api/shows", {
      method: "GET",
      headers: {},
    });

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

const AboutPage = ({ serverData }) => {
  const [data, setData] = useState(null);

  return (
    <section>
      <Head>
        <title>О нас</title>
        <meta
          name="description"
          content="Buy beautiful, high quality carpets for your home."
        />
      </Head>
      <AboutLayout data={data || serverData} />
    </section>
  );
};

AboutPage.getInitialProps = async (context) => {
  const data = await fetchAPI();
  return { serverData: data };
};
export default AboutPage;
