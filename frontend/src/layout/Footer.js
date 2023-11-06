const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center bg-light fixed-bottom w-100 py-3">
            <p className="text-muted m-0">&copy; Swahilipot Hub Foundation. {year}</p>
        </footer>
    );
}

export default Footer;
