import '../styles/scss/theme.scss';
import '../styles/globals.css';
import { useEffect } from 'react';
import Layout from '../layout/Layout';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
