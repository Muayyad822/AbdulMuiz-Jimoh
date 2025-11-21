const Projects = () => {
    const projects = [
        {
            title: 'BSmart Product Landing Page',
            description:
                'This is a product landing page for BSmart, a company that provides smart home products. The page is designed to be responsive and accessible, with a clean and modern design.',
            image: '/assets/bsmart.PNG',
            live: 'https://bsmarthome.ng',
            github: 'https://github.com/Muayyad822/bsmarthome',
        },
        {
            title: 'Al Abraar Landing Page',
            description:
                'This modern, responsive landing page for Al-Abraar Academy highlights course offerings, schedules, and clear enrollment calls-to-action. Built for accessibility and fast load times, it helps prospective students discover programs and sign up effortlessly.',
            image: '/assets/abraaracad.PNG',
            live: 'https://alabraaracademy.com/',
            github: 'https://github.com/Muayyad822/abraar-landing-page',
        },
        {
            title: "The Warrior's Journal",
            description:
                "This is a modern, accessible PWA designed to empower individuals managing chronic health conditions, especially sickle cell disease. The Warrior's Journal provides comprehensive health tracking, crisis support, and motivational tools that work seamlessly across devices, helping users take proactive control of their wellness.",
            image: '/assets/twj.PNG',
            live: 'https://thewarriorsjournal.vercel.app/',
            github: 'https://github.com/Muayyad822/warrior-journal-app',
        },
        {
            title: 'Beyond The Crisis',
            description:
            'This is a dedicated app for sickle cell warriors, offering support, resources, and guidance tailored to those living with sickle cell disease. The app helps users manage their health, connect with a supportive community, and access information to improve their quality of life. With practical tools and curated content from Youtube.',
            image: '/assets/btc.PNG',
            live: 'https://beyondthecrisis.vercel.app/',
            github: 'https://github.com/Muayyad822/beyond-the-crisis',
        },
        {
            title: 'VerifyMeds',
            description:
                'VerifyMeds is a Progressive Web App (PWA) that enables users and pharmacists to verify the authenticity of medications using QR codes and manual input. The system uses NAFDAC drug data, works offline, and supports counterfeit reporting to improve public health and pharmaceutical transparency.',
            image: '/assets/vrfmed.png',
            live: 'https://verifymeds.vercel.app/',
            github: 'https://github.com/Muayyad822/submissions/tree/main/team-19-verifymeds',
        },
        {
            title: 'Qoreeny',
            description:
                'This is a simple web app to help users track their Ramadan goals and stay motivated throughout the month. It allows users to add personal goals, choose from a list of recommended goal, track their completion, and receive notifications about their progress.',
            image: '/assets/qoreeny.PNG',
            live: 'https://qoreeny.vercel.app/',
            github: 'https://github.com/Muayyad822/Qoreeny',
        },
        {
            title: 'Just Crack It',
            description:
                "A web-based logic game where players must crack a 3-digit password. Using a series of hints, you must deduce which numbers are correct and where they are placed. It's a fun, challenging exercise in pure logic.",
            image: '/assets/jci.PNG',
            live: 'https://justcrackit.vercel.app/',
            github: 'https://github.com/Muayyad822/crackit',
        },
        {
            title: 'Ticket Generator',
            description:
                'This is a React-based web application that allows users to generate a personalized conference ticket. Users can enter their full name, email, and avatar URL (Cloudinary or external link) to create a digital ticket.',
            image: '/assets/ticket.PNG',
            live: 'https://ticket-app-five-chi.vercel.app/',
            github: 'https://github.com/Muayyad822/ticket-app',
        },
        {
            title: 'Soniva',
            description:
                'This is a modern, accessible web application I developed to help people with hearing loss reconnect with the world. Built as a progressive web app (PWA), Soniva provides a suite of hearing assistance tools that work across devices without requiring expensive specialized hardware.',
            image: '/assets/soniva.PNG',
            live: 'https://soniva.vercel.app/',
            github: 'https://github.com/Muayyad822/Soniva',
        },
        {
            title: 'Talk-2-Muayyad',
            description:
                'A real-time chat application with a responsive and user-friendly interface. It supports seamless messaging, online status indicators, and a mobile-friendly design with a sidebar toggle. Built using React, Tailwind CSS, Zustand for state management, and Socket.io for real-time communication.',
            image: '/assets/talk.PNG',
            live: 'https://talk-2-muayyad.onrender.com/',
            github: 'https://github.com/Muayyad822/Talk-2-Muayyad',
        },
        {
            title: 'Anaa Shahirun',
            description:
                'A React-powered web app that helps poets compose verses with AI suggestions for meter, rhyme, and structure. Integrates Google Gemini API to analyze classical Arabic poetry rules. Clean Arabic UI with real-time feedback.',
            image: '/assets/poem.PNG',
            live: 'https://poem-ai-app.vercel.app/',
            github: 'https://github.com/Muayyad822/Poem-AI-App',
        },
        {
            title: 'Color Guessing Game',
            description:
                'A minimalist color-matching game that challenges perception through subtle hue variations. Built with vanilla JavaScript, this project demonstrates clean DOM manipulation and algorithmic color generation while delivering an engaging user experience.',
            image: '/assets/cgg.PNG',
            live: 'https://color-guess-gamee.netlify.app/',
            github: 'https://github.com/Muayyad822/Color-Game',
        },
        // {
        //     title: 'MemeGen',
        //     description:
        //         'A sleek and modern web app that lets users create custom memes with ease. Upload an image, add top and bottom text, and generate a meme instantly. Designed with a light-themed UI for a stylish experience, it also includes a one-click download feature. Built with HTML, JavaScript, and Tailwind CSS.',
        //     image: '/assets/memegen.PNG',
        //     live: 'https://meme-gen-pearl.vercel.app/',
        //     github: 'https://github.com/Muayyad822/Meme-Generator',
        // },
    ];

    return (
        <section id="Projects" className="mb-32 pt-24 px-4">
            <h1 className="text-3xl font-bold mb-12 border-b-2 border-primary pb-2 w-fit mx-auto lg:mx-64">
                PROJECTS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-white dark:bg-gray-800 rounded-t-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col min-h-[400px]"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full mx-auto"
                            loading="lazy"
                        />
                        <div className="bg-primary dark:bg-primary-dark p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {project.title}
                            </h3>
                            <p className="text-xs mb-4 text-left text-white flex-grow">
                                {project.description}
                            </p>

                            <div className="flex justify-between">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold text-sm hover:underline"
                                >
                                    Live site <i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold text-sm hover:underline"
                                >
                                    Github repo <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12 mx-auto w-fit">
                <a
                    href="https://github.com/Muayyad822"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 dark:bg-gray-200 border-2 border-primary dark:border-primary-light text-white dark:text-gray-900 px-6 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                    Explore more
                </a>
            </div>
        </section>
    );
};

export default Projects;
