const Footer = () => {
    return (
        <footer className="py-10 mt-16 border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Muayyad822"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 text-xl"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/abdulmuiz-jimoh-9298111b3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 text-xl"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://x.com/MuizMuayyad"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter / X"
                        className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 text-xl"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="mailto:muayyad822@gmail.com"
                        aria-label="Email"
                        className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 text-xl"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    &copy; {new Date().getFullYear()} AbdulMuiz Jimoh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
