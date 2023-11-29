import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const SmsModal = ({ isOpen, onRequestClose }) => {
    const [toNumber, setToNumber] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const handleSendSMS = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('to_number', toNumber);
        formData.append('message_body', messageBody);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/send_sms/', formData);
            const data = response.data;

            if (data.success) {
                console.log('SMS sent successfully to members');
            } else {
                console.error('Failed to send sms:', data.message);
            }

            setToNumber('');
            setMessageBody('');

            console.log('SMS sent successfully');
        } catch (error) {
            console.error('Error sending SMS:', error);
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
            contentLabel="SMS Modal"
            style={customStyles}
            ariaHideApp={false}
        >
            <h2>Send bulk SMS to the members</h2>
            <form onSubmit={handleSendSMS}>
                <div>
                    <label htmlFor="recipient">Recipient:</label>
                    <input
                        type="text"
                        id='to_number'
                        value={toNumber}
                        placeholder="Enter in this format: +254xxxxxxxx"
                        onChange={(e) => setToNumber(e.target.value)}
                        className="form-control form-control-sm"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        placeholder="Type your message"
                        id='message_body'
                        value={messageBody}
                        className="form-control form-control-sm"
                        onChange={(e) => setMessageBody(e.target.value)}
                    />
                </div>
                <button type="submit" className="mt-3 btn btn-primary btn-sm">
                    Send
                </button>
            </form>
        </Modal>
    );
};

export default SmsModal;
