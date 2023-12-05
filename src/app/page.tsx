import Head from "next/head";
import SlideInLeft from "./components/SlideInLeft";
import GetStartedButton from "./components/GetStarted";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <Head>
        <title>ClimaSphere</title>
      </Head>
      <SlideInLeft>
        <div className="text-6xl font-bold mb-8">ClimaSphere</div>
      </SlideInLeft>
      <GetStartedButton />
    </div>
  );
}
