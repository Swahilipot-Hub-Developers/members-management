import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MemberRegistration = () => {
    const [formData, setFormData] = useState({
        name: 'Chris',
        gender: 'M',
        yearOfBirth: '',
        country: '',
        county: '',
        subCounty: '',
        phoneNumber: '',
        password: ''
    });

    useEffect(() => {
        console.log("Form updated successfully", formData);
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1/membersmgmt/members/', formData);

            if (response.status === 201) {
                console.log('Member registered successfully');
                // You can redirect or perform any other action upon successful registration
            } else {
                console.error('Error registering member');
            }
        } catch (error) {
            console.error('Error:', error);
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
            <form className="container" style={{ width: '70%', margin: 'auto'}} onSubmit={handleSubmit}>
                <h3 className="mt-4 fs-3 fw-bold text-center mb-2">Register an account (Member)</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="name" aria-describedby="emailHelp" value={formData.name} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
                    <input type="email" className="form-control" id="Gender" aria-describedby="emailHelp" value={formData.gender} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Year of Birth</label>
                    <input type="email" className="form-control" id="yearofbirth" aria-describedby="emailHelp" value={formData.yearOfBirth} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                    <input type="email" className="form-control" id="country" aria-describedby="emailHelp" value={formData.country} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">County</label>
                    <input type="email" className="form-control" id="county" aria-describedby="emailHelp" value={formData.county} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Sub-county</label>
                    <input type="email" className="form-control" id="subcounty" aria-describedby="emailHelp" value={formData.subCounty} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                    <input type="email" className="form-control" id="phonenumber" aria-describedby="emailHelp" value={formData.phoneNumber} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={formData.password} onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default MemberRegistration;