import { useState, useEffect } from 'react';
import axios from 'axios';

const MembersList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/members/');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, []);

    return (
        <div className="mt-4">
            <table className="table">
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MembersList;
