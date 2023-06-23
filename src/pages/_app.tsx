import { type AppType } from 'next/dist/shared/lib/utils';
import { Roboto_Condensed } from 'next/font/google';
import '~/styles/globals.css';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={robotoCondensed.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
