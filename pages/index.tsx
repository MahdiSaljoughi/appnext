import MainFooter from "@/components/Footer/MainFooter";
import MainHeader from "@/components/Header/MainHeader";
import MobileHeader from "@/components/Header/MobileHeader";
import Home_page from "@/components/Home/Home_page";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>توسعه داده شده با Nextjs</title>
      </Head>
      <MainHeader />
      <MobileHeader />
      <Home_page />
      <MainFooter />
    </>
  );
}
