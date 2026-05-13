import { useState, useEffect } from 'react';
import GamesModal from './GamesModal';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isGamesOpen, setIsGamesOpen] = useState(false);

    useEffect(() => {
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setIsDark(true);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur-sm py-4 px-4 sm:px-8 lg:px-12 flex justify-between items-center gap-4 shadow-md dark:shadow-gray-800/50">
                <a 
                    href="#Hero" 
                    onClick={(e) => handleNavClick(e, 'Hero')}
                    className="flex items-center gap-2"
                >
                    <img src="/assets/ajlogo.png" alt="logo" className="h-12 w-auto" />
                </a>

                <div className="flex items-center gap-4 md:gap-6">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            {['Home', 'Skills', 'Tools', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item === 'Home' ? 'Hero' : item}`}
                                        onClick={(e) => handleNavClick(e, item === 'Home' ? 'Hero' : item)}
                                        className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light hover:font-bold transition-all duration-200 border-b-2 border-transparent hover:border-primary dark:hover:border-primary-light pb-1"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                    >
                        {isDark ? (
                            <i className="fas fa-sun text-gray-900 dark:text-gray-100 text-xl"></i>
                        ) : (
                            <i className="fas fa-moon text-gray-900 dark:text-gray-100 text-xl"></i>
                        )}
                    </button>

                    {/* Game Icon */}
                    <button
                        onClick={() => setIsGamesOpen(true)}
                        aria-label="Open games"
                        className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        title="Play Games"
                    >
                        <i className="fas fa-gamepad text-gray-900 dark:text-gray-100 text-xl"></i>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        className="md:hidden text-gray-900 dark:text-gray-100 text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-100 dark:bg-gray-900 shadow-2xl z-[70] transition-transform duration-300 transform ${isMobileMenuOpen
                    ? 'translate-x-0'
                    : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                        className="text-gray-900 dark:text-gray-100 text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <nav className="p-4">
                    <ul className="space-y-4">
                        {['Home', 'Skills', 'Tools', 'Experience', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item === 'Home' ? 'Hero' : item}`}
                                    onClick={(e) => handleNavClick(e, item === 'Home' ? 'Hero' : item)}
                                    className="block py-2 px-4 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <GamesModal isOpen={isGamesOpen} onClose={() => setIsGamesOpen(false)} />
        </>
    );
};

export default Header;
