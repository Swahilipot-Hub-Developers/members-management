import { useState, useEffect } from 'react';
import axios from 'axios';
import EditSection from './edit-section';
import Modal from 'react-modal';

const MembersList = () => {
    const [members, setMembers] = useState([]);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editingMember, setEditingMember] = useState(null);

    const handleEdit = (member) => {
        setEditingMember(member);
        setEditModalVisible(true);
    };

    const closeEditModal = () => {
        setEditModalVisible(false);
        setEditingMember(null);
    };

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('https://codeschris.pythonanywhere.com/api/members/');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, []);

    // Delete function for individual member
    const handleDelete = async (memberId) => {
        try {
            const response = await axios.delete(`https://codeschris.pythonanywhere.com/api/members/${memberId}`);

            if (response.status === 204) {
                setMembers((prevMembers) => prevMembers.filter((member) => member.id !== memberId));
                //remove console.log to prevent XSS attacks
                console.log(`Member with ID ${memberId} deleted successfully`);
                window.location.reload();
            } else {
                console.error(`Error deleting member with ID ${memberId}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEditSubmit = async (editedData) => {
        try {
            const response = await axios.put(`https://codeschris.pythonanywhere.com/api/members/${editedData.member_id}`, editedData);
    
            if (response.status === 200) {
                setMembers((prevMembers) =>
                    prevMembers.map((member) =>
                        member.id === editedData.member_id ? editedData : member
                    )
                );
                setEditModalVisible(false);
            } else {
                console.error(`Error updating member with ID ${editedData.member_id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="table-responsive mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Year of Birth</th>
                        <th>Phone Number</th>
                        <th>Country</th>
                        <th>County</th>
                        <th>Sub-County</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr key={member.id}>
                            <td>{member.member_id}</td>
                            <td>{member.name}</td>
                            <td>{member.gender}</td>
                            <td>{member.year_of_birth}</td>
                            <td>{member.phone_number}</td>
                            <td>{member.country}</td>
                            <td>{member.county}</td>
                            <td>{member.sub_county}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => handleEdit(member)}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(member.member_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                isOpen={editModalVisible}
                onRequestClose={closeEditModal}
                contentLabel="Edit Member Modal"
            >
                <EditSection
                    editingMember={editingMember}
                    onSubmit={handleEditSubmit}
                    isOpen={editModalVisible}
                    onRequestClose={closeEditModal}
                />
            </Modal>

        </div>
    );
}

export default MembersList;
