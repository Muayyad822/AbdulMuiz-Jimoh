import { experience } from '../data/experience';

const Experience = () => {
    return (
        <section id="Experience" className="lg:mb-32 pt-24 px-4">
            <h1 className="text-3xl font-bold mb-12 border-b-2 border-primary pb-2 w-fit mx-auto lg:mx-64 uppercase">
                Work Experience
            </h1>

            <div className="max-w-4xl mx-auto relative border-l-2 border-gray-200 dark:border-gray-700 space-y-12">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 md:pl-12 group">
                        {/* Dot on the timeline */}
                        <div className="absolute -left-[9px] top-6 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900 transition-transform duration-300 group-hover:scale-125"></div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 flex items-center">
                                <i className="fas fa-briefcase mr-3 text-primary text-lg"></i>
                                {job.company}
                            </h3>
                            <h4 className="text-lg font-semibold text-primary mb-3">
                                {job.role}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {job.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
