import { useState, useEffect } from 'react';

const Hero = () => {
    const [role, setRole] = useState('Web Developer');

    useEffect(() => {
        const interval = setInterval(() => {
            setRole((prev) => (prev === 'Web Developer' ? 'Web Designer' : 'Web Developer'));
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="About"
            className="flex flex-col lg:flex-row items-center justify-center  lg:mb-32 lg:pt-64 pt-24 px-6"
        >
            <div className="relative group">
                <img
                    src="/assets/dp.png"
                    alt="DP"
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-8 border-gray-300 dark:border-gray-700 object-cover shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full border-8 border-transparent group-hover:border-primary/30 transition-all duration-500 animate-spin-slow"></div>
            </div>

            <div className="max-w-2xl">
                <h4 className="text-xl font-medium mb-2 animate-fade-in-out" id="textChange">
                    {role}
                </h4>
                <h1 className="text-4xl font-bold mb-4">
                    AbdulMuiz<span className="bg-primary text-white px-2 mx-4 rounded">Jimoh</span>
                </h1>
                <p className="text-base leading-relaxed mb-8">
                    I'm a web developer passionate about creating clean, user-friendly
                    websites. With expertise in front-end development, back-end
                    development and UI/UX design, I blend creativity with technical
                    know-how to deliver seamless digital experiences. Let's connect and
                    bring your online vision to life!
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="/assets/AbdulMuiz Jimoh.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 dark:bg-gray-200 border-2 border-primary dark:border-primary-light text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        View my CV
                    </a>
                    <a
                        href="/assets/AbdulMuiz Jimoh.pdf"
                        download
                        className="bg-gray-700 dark:bg-gray-200 border-2 border-primary dark:border-primary-light text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Download my CV
                    </a>
                    <a
                        href="https://github.com/Muayyad822"
                        target="_blank"
                        className="bg-gray-700 dark:bg-gray-200 border-2 border-white dark:border-gray-900 text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        My Github
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
