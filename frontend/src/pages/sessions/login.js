import Image from 'next/image';
import { useState } from 'react';
import { login } from '../api/api';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    
    const router = useRouter();
    
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            await login(credentials);
            router.push('/');
        } catch (error) {
          // Handle login error
          console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };


    return(
        <div className="mt-5 pt-2" style={{minHeight: '73vh'}}>
            <header className="text-center mb-4">
                <Image
                src="/assets/logo.png"
                height={70}
                width={300}
                alt="SPH Logo"
                />
            </header>
            <form onSubmit={handleLogin} className="container" style={{ width: '70%', margin: 'auto'}}>
                <h3 className="mt-4 fs-3 fw-bold text-center mb-2">Log in to your account</h3>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" id="username" aria-describedby="emailHelp" onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;