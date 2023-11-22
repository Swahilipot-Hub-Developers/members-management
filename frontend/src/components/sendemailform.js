import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const EmailModal = ({ isOpen, onRequestClose, onSend, memberEmails  }) => {
    const [selectedRecipient, setSelectedRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = async () => {
        try {
            const response = await axios.post('https://codeschris.pythonanywhere.com/api/send-email-to-members/', {
                recipient: selectedRecipient,
                subject,
                message,
            });

            const data = response.data;

            if (data.success) {
                console.log('Emails sent successfully to members');
            } else {
                console.error('Failed to send emails:', data.message);
            }

            setSelectedRecipient('');
            setSubject('');
            setMessage('');
            onRequestClose();
        } catch (error) {
            console.error('Error sending emails:', error);
        }
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            maxWidth: '400px',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Email Modal"
      style={customStyles}
    >
      <h2>Send a bulk email to the members</h2>
      <form>
        <div>
            <label htmlFor="recipient">Recipient:</label>
            <input
                type="text"
                id="recipient"
                className="form-control form-control-sm"
                value={selectedRecipient}
                onChange={(e) => setSelectedRecipient(e.target.value)} // Fix: Use setSelectedRecipient instead of setRecipient
            />
        </div>
        <div>
            <label htmlFor="subject">Subject:</label>
            <input
                type="text"
                id="subject"
                className="form-control form-control-sm"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                className="form-control form-control-sm"
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        <button type="button" className="mt-3 btn btn-primary btn-sm" onClick={handleSend}>
            Send
        </button>
      </form>
    </Modal>
  );
};

export default EmailModal;
