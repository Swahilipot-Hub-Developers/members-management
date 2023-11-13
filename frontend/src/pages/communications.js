import { FaEnvelope, FaPhone } from "react-icons/fa6";

const Communications = () => {
    return (
        <div className='container'>
            <header>
                <h2 className="display-4 text-center fw-bold mt-5">Communications</h2>
                <p className="text-center fs-5">Send bulk messages to the members</p>
            </header>
            <div className="d-flex flex-md-row flex-column justify-content-center mt-4 mb-5">
                <a href="#email">
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
        </div>
    );
};

export default Communications;
