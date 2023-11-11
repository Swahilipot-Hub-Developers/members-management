const Communications = () => {
    return (
        <div className='container'>
            <header>
                <h2 className="display-4 text-center fw-bold mt-5">Communications</h2>
                <p className="text-center fs-5">Send bulk messages to the members</p>
            </header>
            <div className="d-flex flex-row justify-content-center mt-4 mb-5">
                <a href="#email">
                    <div className="card p-3 mx-2 communication-card">
                        <div className="card-title text-center">
                            <h5>Email</h5>
                        </div>
                        <div className="card-body">
                            <p>Send Bulk Emails to the members</p>
                        </div>
                    </div>
                </a>
                <a href="#SMS">
                    <div className="card p-3 mx-2 communication-card">
                        <div className="card-title text-center">
                            <h5>SMS</h5>
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
