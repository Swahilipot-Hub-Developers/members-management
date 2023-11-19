import AnalyticCard from "../components/analyticcard";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Analytics = () => {
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
        <>
            <div className='mb-5'>
                <header>
                    <h2 className="display-4 text-center fw-bold mt-5 mb-5">Analytics</h2>
                </header>
                <div className="row row-cols-2 row-cols-2-md-1 g-4">
                    <AnalyticCard count={totalMembers}/>
                </div>
            </div>
        </>
    )
}

export default Analytics;