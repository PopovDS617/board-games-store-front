import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/layout';
import store from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <AnimatePresence mode="wait" initial={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </Provider>
    </>
  );
}

export default MyApp;
