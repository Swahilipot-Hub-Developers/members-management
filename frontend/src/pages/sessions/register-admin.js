import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';

const AdminRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/admin-registration/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response.data); // Handle success
        } catch (error) {
            console.error(error); // Handle error
        }
    };
    
    return(
        <div className="mt-5 mb-5 pt-2" style={{minHeight: '73vh'}}>
            <header className="text-center mb-4">
                <Image
                src="/assets/logo.png"
                height={70}
                width={300}
                alt="SPH Logo"
                />
            </header>
            <form onSubmit={handleSubmit} className="container" style={{ width: '70%', margin: 'auto'}}>
                <h3 className="mt-4 fs-3 fw-bold text-center mb-2">Register an account (Admin)</h3>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" value={formData.username} onChange={handleChange} name="username" id="username" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input type="text" className="form-control" value={formData.first_name} onChange={handleChange} name="first_name" id="first_name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                    <input type="text" className="form-control" value={formData.last_name} onChange={handleChange} name="last_name" id="last_name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={formData.email} onChange={handleChange} name="email" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" value={formData.phone_number} onChange={handleChange} name="phone_number" id="phone_number" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={formData.password} onChange={handleChange} name="password" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminRegistration;