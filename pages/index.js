import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZASFarmStore</title>
        <meta name="description" content="ZASFarmStore- Farm fresh organic " />
      </Head>
      <Navbar />
      <div>
        <img src="/Farm_FRESH.jpeg" alt="" />
      </div>
      <Footer />
    </div>
  );
}
