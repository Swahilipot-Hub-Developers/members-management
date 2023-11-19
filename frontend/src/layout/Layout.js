import NavBar from './NavBar';
import Footer from './Footer';
import MetaTags from './Metatags';

const Layout = ({ children, hideNavbar }) => {
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