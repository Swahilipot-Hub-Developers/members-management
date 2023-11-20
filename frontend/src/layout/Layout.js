import NavBar from './NavBar';
import Footer from './Footer';
import MetaTags from './Metatags';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const hideNavbar = router.pathname === '/sessions/register-member'; 

  return (
    <>
      <MetaTags/>
      {!hideNavbar && <NavBar />}
      <main className='container'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout