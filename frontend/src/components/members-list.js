import { useState, useEffect } from 'react';
import axios from 'axios';

const MembersList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // Fetch members from the API
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/membersmgmt/members');
                setMembers(response.data);
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        // Call the fetchMembers function
        fetchMembers();
    }, []); // The empty dependency array ensures the effect runs only once

    return (
        <div>
            <ul className="list-group list-group-flush">
                {members.map(member => (
                    <li key={member.id} className="list-group-item">
                        {member.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MembersList;
