import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import EmailModal from "../components/sendemailform";

const Communications = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [memberEmails, setMemberEmails] = useState([]);
  
    useEffect(() => {
        const fetchMemberEmails = async () => {
            try {
                const response = await axios.get('https://codeschris.pythonanywhere.com/api/members/');
                const members = response.data;
                const emails = members.map((member) => member.email_address);
                setMemberEmails(emails);
            } catch (error) {
                console.error('Error fetching member emails:', error);
            }
        };

        fetchMemberEmails();
    }, []);

    const handleSendEmail = async ({ recipient, subject, message }) => {
        try {
            const response = await axios.post('https://codeschris.pythonanywhere.com/api/send-email-to-members/', {
                recipient,
                subject,
                message,
            });

            const data = response.data;

            if (data.success) {
                console.log('Emails sent successfully to members');
            } else {
                console.error('Failed to send emails:', data.message);
            }
        } catch (error) {
            console.error('Error sending emails:', error);
        }
    };


    return (
        <div>
            <header>
                <h2 className="display-4 text-center fw-bold mt-5">Communications</h2>
                <p className="text-center fs-5">Send bulk messages to the members</p>
            </header>
            <div className="d-flex flex-md-row flex-column justify-content-center mt-4 mb-5">
                <a href="#email" onClick={() => setIsModalOpen(true)}>
                    <div className="card p-3 mx-2 mb-3 communication-card">
                        <div className="card-title text-center">
                            <h5><FaEnvelope className="text-center mb-1"/> Email</h5>
                        </div>
                        <div className="card-body">
                            <p>Send Bulk Emails to the members</p>
                        </div>
                    </div>
                </a>
                <a href="#SMS">
                    <div className="card p-3 mx-2 mb-3 communication-card">
                        <div className="card-title text-center">
                            <h5><FaPhone className="text-center mb-1"/> SMS</h5>
                        </div>
                        <div className="card-body">
                            <p>Send Bulk SMS to the members</p>
                        </div>
                    </div>
                </a>
            </div>
            <EmailModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onSend={handleSendEmail}
                memberEmails={memberEmails}
            />
        </div>
    );
};

export default Communications;
