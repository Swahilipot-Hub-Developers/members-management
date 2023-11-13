const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="container py-4">
            <div className="row align-items-md-center text-center text-md-start">
                <div className="col-md mb-3 mb-md-0">
                    <p className="mb-0">© Swahilipot Hub Foundation {year}</p>
                </div>

                <div className="col-md d-md-flex justify-content-md-end">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i className="bi-facebook"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i className="bi-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i className="bi-github"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i className="bi-slack"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
