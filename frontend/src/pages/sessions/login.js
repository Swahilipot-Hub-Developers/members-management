import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
//import { login } from '../api/api';
import { useAuth } from '../../components/authHook/authContext'; // Adjust the path as needed

const LoginPage = () => {
    const router = useRouter();
    const { login, isAuthenticated } = useAuth(); // Use the useAuth hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Redirect to home if already authenticated
    useEffect(() => {
      if (isAuthenticated) {
        router.push('/');
      }
    }, [isAuthenticated, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');
        setLoading(true);

        try {
            const response = await login({ username, password, csrfmiddlewaretoken: "hkz3ykJ1TJ13ob6hsCofj1Nfg1MLIrVPyuqKdw0hearCMyaAhLDQU7aX6mKXqZhd" });
            console.log(response);

            if (response.isAdmin) {
                router.push('/'); // Redirect to the index page
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            console.error('Login failed', error);
            setError('An error occurred while logging in');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-5 pt-2" style={{ minHeight: '73vh' }}>
            <header className="text-center mb-4">
                <Image src="/assets/logo.png" height={70} width={300} alt="SPH Logo" />
            </header>
            <form className="container" style={{ width: '70%', margin: 'auto' }} onSubmit={handleSubmit}>
                <h3 className="mt-4 fs-3 fw-bold text-center mb-2">Log in to your account</h3>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-describedby="usernameHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="alert alert-danger mb-3">{error}</div>}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Logging in...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
