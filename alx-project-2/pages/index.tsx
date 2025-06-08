import Head from "next/head";
import Header from "@/components/layout/Header"; // adjust if not using alias

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project</title>
        <meta name="description" content="Setup Project for ALX" />
      </Head>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold">Welcome to ALX Project 2!</h2>
        <p>This is the homepage of your Next.js + TypeScript + Tailwind setup.</p>
      </main>
    </>
  );
}
