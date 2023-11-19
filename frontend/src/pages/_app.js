import '../styles/scss/theme.scss';
import '../styles/globals.css';
import { useEffect } from 'react';
import Layout from '../layout/Layout';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  const router = useRouter()
  const hideNavbar = router.pathname === '/sessions/register-member';

  return (
    <Layout hideNavbar={hideNavbar}>
      <Component {...pageProps} />
    </Layout>
  );
}
