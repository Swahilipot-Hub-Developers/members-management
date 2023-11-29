import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {
    const [totalMembers, setTotalMembers] = useState(0);

    useEffect(() => {
        const fetchTotalMembers = async () => {
        try {
            const response = await axios.get('https://codeschris.pythonanywhere.com/api/members/');
            const data = response.data;
            setTotalMembers(data.length);
        } catch (error) {
            console.error('Error fetching total members:', error);
        }
    };

    fetchTotalMembers();
    }, []); 

    return (
        <div className="content index d-flex flex-column align-items-center text-center mt-5">
            <div>
                <h1 className="text-center text-black fw-bold">Swahilipot Hub Foundation has <span className="text-primary">{totalMembers}</span> members. Join through the linked button below!</h1>
            </div>
            <div className="d-flex flex-column mt-3 gap-3 md-w-25">
                <Link href="/sessions/register-member"><button className="btn btn-primary">Become a member of SPH</button></Link>
                <Link href="/sessions/login"><button className="btn btn-primary">Log in as Admin</button></Link>
            </div>
        </div>
    )
}

export default Home;