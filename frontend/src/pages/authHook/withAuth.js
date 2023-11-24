import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './authContext';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const { isAuthenticated } = useAuth();

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/sessions/login');
            }
        }, [isAuthenticated, router]);

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    return Wrapper;
};

export default withAuth;
