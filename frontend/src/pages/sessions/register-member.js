import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

const MemberRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        year_of_birth: '',
        email_address: '',
        country: '',
        county: '',
        sub_county: '',
        phone_number: '',
    });

    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
    
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
      
        // Include the reCAPTCHA value in your form data
        const formDataWithRecaptcha = { ...formData, recaptchaValue };

        try {
            const response = await axios.post('https://codeschris.pythonanywhere.com/api/members/', formDataWithRecaptcha, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                console.log('Member registered successfully');
                window.location.reload();   // replace with message page. this reloads the screen after form submission
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
                <h3 className="mt-4 fs-3 fw-bold text-center mb-2">Be a part of the community!</h3>
                <p className="text-muted text-start">*Required fields</p>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name*</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={formData.name} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender*</label>
                    <select
                        className="form-select"
                        id="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="choose">Specify</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="year_of_birth" className="form-label">Year of Birth*</label>
                    <input type="text" className="form-control" id="year_of_birth" aria-describedby="emailHelp" value={formData.year_of_birth} onChange={handleInputChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email_address" className="form-label">Email Address*</label>
                    <input type="email" className="form-control" id="email_address" aria-describedby="emailHelp" value={formData.email_address} onChange={handleInputChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country*</label>
                    <input type="text" className="form-control" id="country" aria-describedby="emailHelp" value={formData.country} onChange={handleInputChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="county" className="form-label">County*</label>
                    <input type="text" className="form-control" id="county" aria-describedby="emailHelp" value={formData.county} onChange={handleInputChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sub_county" className="form-label">Sub-county*</label>
                    <select
                        className="form-select"
                        id="sub_county"
                        value={formData.sub_county}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="choose">Specify sub-county</option>
                        <option value="Mvita">Mvita</option>
                        <option value="Jomvu">Jomvu</option>
                        <option value="Changamwe">Changamwe</option>
                        <option value="Kisauni">Kisauni</option>
                        <option value="Nyali">Nyali</option>
                        <option value="Likoni">Likoni</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">Phone Number*</label>
                    <input type="text" className="form-control" id="phone_number" aria-describedby="emailHelp" value={formData.phone_number} onChange={handleInputChange} required/>
                </div>
                <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    className="mb-3"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default MemberRegistration;
