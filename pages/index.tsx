import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "bulma/css/bulma.min.css";
import { Navbar } from "../components/Navbar";
import Splash from "../components/Splash";
import About from "../components/About";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>David Chen</title>
        <meta
          name="description"
          content="David ChenPersonal Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="David Chen" />
        <meta property="og:url" content="https://davidxchen.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="David Chen Personal Portfolio Website"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/dchen327/dchen327.github.io/master/public/images/Tropical-sunset.png"
        />
      </Head>

      <Navbar />
      <Splash />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
