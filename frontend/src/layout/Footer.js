const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer class="container py-4">
            <div class="row align-items-md-center text-center text-md-start">
                <div class="col-md mb-3 mb-md-0">
                    <p class="mb-0">© Swahilipot Hub Foundation {year}</p>
                </div>

                <div class="col-md d-md-flex justify-content-md-end">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                            <a class="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i class="bi-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i class="bi-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i class="bi-github"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#">
                                <i class="bi-slack"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
