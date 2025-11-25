import { projects } from '../data/projects';

const Projects = () => {
    // Projects data is now imported from ../data/projects.ts

    return (
        <section id="Projects" className="lg:mb-32 pt-24 px-4 scroll-mt-28">
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
