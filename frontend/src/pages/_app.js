import '../styles/scss/theme.scss';
import '../styles/globals.css';
import { useEffect } from 'react';
import Layout from '../layout/Layout';
//import { AuthProvider } from '../components/authHook/authContext';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    //<AuthProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    //</AuthProvider>
  );
}
