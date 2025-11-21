const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-gray-300 dark:border-gray-700">
            <p className="text-gray-900 dark:text-gray-100">
                &copy; <span id="current-year">{new Date().getFullYear()}</span> AbdulMuiz
                Jimoh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
