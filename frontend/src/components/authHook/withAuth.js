import { useEffect } from 'react';
import { useAuth } from './authContext';
import { useRouter } from 'next/router';

const withAdminAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
      // Redirect to login page if not authenticated
      if (!isAuthenticated) {
        router.push('/sessions/login');
      }

      // Redirect to home page if not an admin
      if (isAuthenticated && !user?.isAdmin) {
        router.push('/');
      }
    }, [isAuthenticated, user, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAdminAuth;
