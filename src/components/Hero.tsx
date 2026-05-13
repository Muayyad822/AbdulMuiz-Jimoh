import { useState, useEffect } from 'react';

const Hero = () => {
    const roles = ['Web Developer', 'Web Designer', 'Co-founder', 'Full-Stack Developer'];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="Hero"
            className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:pt-48 pt-24 px-6 scroll-mt-20"
        >
            <div className="relative group">
                <img
                    src="/assets/dp.png"
                    alt="DP"
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-8 border-gray-300 dark:border-gray-700 object-cover shadow-lg group-hover:shadow-primary/30 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full border-8 border-transparent group-hover:border-primary/30 transition-all duration-500 animate-spin-slow"></div>
            </div>

            <div className="max-w-2xl text-center lg:text-left">
                <h4 className="text-xl font-medium mb-2 animate-fade-in-out" id="textChange">
                    {roles[roleIndex]}
                </h4>
                <h1 className="text-4xl font-bold mb-4">
                    AbdulMuiz<span className="bg-primary text-white px-2 mx-4 rounded">Jimoh</span>
                </h1>
                <p className="text-base leading-relaxed mb-8">
                    I'm a full-stack web developer and co-founder of Tahleem, an AI-powered
                    Islamic education startup. I build clean, scalable web experiences using
                    React, Next.js, Node.js, and modern backend platforms like Firebase and
                    Supabase. I've also contributed to multiple early-stage startups,
                    helping bring their products to life, blending creativity with technical
                    depth at every stage.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a
                        href="/assets/AbdulMuiz Jimoh.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 dark:bg-gray-200 border-2 border-primary dark:border-primary-light text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        View my CV
                    </a>
                    {/* <a
                        href="/assets/AbdulMuiz Jimoh.pdf"
                        download
                        className="bg-gray-700 dark:bg-gray-200 border-2 border-primary dark:border-primary-light text-white dark:text-gray-900 px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Download my CV
                    </a> */}
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
