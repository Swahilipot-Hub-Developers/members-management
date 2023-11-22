import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const EditSection = ({ editingMember, onSubmit, isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (editingMember) {
            setFormData(editingMember);
        }
    }, [editingMember]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({});
    };

    const modalStyle = {
        content: {
            width: '50%',
            margin: 'auto',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Member Modal"
            style={modalStyle}
            ariaHideApp={false}
        >
        <div>
            <h3 className="display-6 fs-2 fw-bold">Edit details for {formData.name}</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control form-control-sm" id="name" aria-describedby="emailHelp" value={formData.name} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select
                        className="form-select form-select-sm"
                        id="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                    >
                        <option value="choose">Specify</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="year_of_birth" className="form-label">Year of Birth</label>
                    <input type="text" className="form-control form-control-sm" id="year_of_birth" aria-describedby="emailHelp" value={formData.year_of_birth} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email_address" className="form-label">Email Address</label>
                    <input type="email" className="form-control form-control-sm" id="email_address" aria-describedby="emailHelp" value={formData.email_address} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control form-control-sm" id="country" aria-describedby="emailHelp" value={formData.country} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="county" className="form-label">County</label>
                    <input type="text" className="form-control form-control-sm" id="county" aria-describedby="emailHelp" value={formData.county} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sub_county" className="form-label">Sub-county</label>
                    <select
                        className="form-select form-select-sm"
                        id="sub_county"
                        value={formData.sub_county}
                        onChange={handleInputChange}
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
                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                    <input type="text" className="form-control form-control-sm" id="phone_number" aria-describedby="emailHelp" value={formData.phone_number} onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </Modal>
    )
}

export default EditSection;