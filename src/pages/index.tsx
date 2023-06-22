import Head from 'next/head';
import Main from '~/components/main/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pacman</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
