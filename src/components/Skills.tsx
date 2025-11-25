const Skills = () => {
    return (
        <section id="Skills" className="lg:mb-32 pt-24 px-4 scroll-mt-28">
            <h1 className="text-3xl font-bold mb-12 border-b-2 border-primary pb-2 w-fit mx-auto lg:mx-64">
                SKILLS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Skill Card 1 */}
                <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-300 hover:-translate-y-1">
                    <i className="fa-solid fa-code text-3xl w-full h-16 object-contain mr-4"></i>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Front-end Development</h2>
                        <p className="text-sm leading-relaxed">
                            I specialize in Front-End Development with a strong foundation in
                            HTML5, CSS3, and JavaScript. I'm experienced in working with
                            frameworks like React to build dynamic, responsive user interfaces.
                        </p>
                    </div>
                </div>

                {/* Skill Card 2 */}
                <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-300 hover:-translate-y-1">
                    <i className="fa-solid fa-database text-3xl w-full h-16 object-contain mr-4"></i>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Back-End Development</h2>
                        <p className="text-sm leading-relaxed">
                            On the Back-End side, I'm proficient in Node.js and I use MongoDB
                            for database management to create robust server-side applications.
                        </p>
                    </div>
                </div>

                {/* Skill Card 3 */}
                <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-300 hover:-translate-y-1">
                    <i className="fa-solid fa-palette text-3xl w-full h-16 object-contain mr-4"></i>
                    <div>
                        <h2 className="text-xl font-bold mb-2">UI/UX Design</h2>
                        <p className="text-sm leading-relaxed">
                            I specialize in UI/UX Design with a strong foundation in Figma for
                            creating intuitive, user-centered interfaces. I'm also experienced
                            in graphic design using Canva to craft visually compelling designs
                            that enhance user engagement and brand identity.
                        </p>
                    </div>
                </div>

                {/* Skill Card 4 */}
                <div className="flex flex-col bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-300 hover:-translate-y-1">
                    <i className="fa-solid fa-brain text-3xl w-full h-16 object-contain mr-4"></i>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Soft Skills</h2>
                        <p className="text-sm leading-relaxed">
                            In terms of soft skills, I excel at problem-solving and effective
                            communication, which helps me collaborate efficiently with teams
                            and deliver high-quality solutions. My creativity drives me to
                            design intuitive and engaging web experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
