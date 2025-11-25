const Tools = () => {
    const tools = [
        { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
        { name: 'Tailwind CSS', image: '/assets/tailwind.png' },
        { name: 'Sass', icon: 'fab fa-sass', color: 'text-pink-500' },
        { name: 'React.js', icon: 'fab fa-react', color: 'text-blue-400' },
        { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
        { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-900 dark:text-gray-100' },
        { name: 'MongoDB', image: '/assets/mongodb.png' },
        { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500' },
        { name: 'Canva', image: '/assets/canva.png' },
    ];

    return (
        <section id="Tools" className="lg:mb-32 pt-24 px-4">
            <h1 className="text-3xl font-bold mb-12 border-b-2 border-primary pb-2 w-fit mx-auto lg:mx-64">
                TOOLS  & TECHNOLOGIES
            </h1>
            

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="flex flex-col items-center bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-300 hover:-translate-y-1 group"
                    >
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                            {tool.icon ? (
                                <i
                                    className={`${tool.icon} text-5xl ${tool.color} group-hover:scale-110 transition-transform`}
                                ></i>
                            ) : (
                                <img
                                    src={tool.image}
                                    alt={tool.name}
                                    className={`group-hover:scale-110 transition-transform ${tool.name === 'MongoDB' ? 'h-16 w-16' : 'h-12 w-12' // Original logic had different sizes
                                        }`}
                                />
                            )}
                        </div>
                        <span className="font-medium text-center">{tool.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;
