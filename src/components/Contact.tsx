import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = '2348169017058';
        const { fullname, email, subject, message } = formData;

        const formattedMessage = `Name: ${fullname} \nEmail: ${email} \nSubject: ${subject} \nMessage: ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            formattedMessage
        )}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <section id="Contact" className="lg:mb-32 pt-20 px-4 scroll-mt-20">
            <h1 className="text-3xl font-bold mb-12 border-b-2 border-primary pb-2 w-fit mx-auto lg:mx-32">
                CONTACT
            </h1>

            <div className="flex flex-col lg:flex-row justify-center gap-16 max-w-6xl mx-auto">
                <div className="max-w-md">
                    <h4 className="text-2xl font-bold mb-8 text-primary dark:text-primary-light">
                        Get In Touch
                    </h4>

                    {/* Social Media Links */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* Email */}
                        <div className="flex items-center gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20 transition-colors">
                                <i className="fas fa-envelope text-primary dark:text-primary-light text-lg"></i>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <a
                                    href="mailto:muayyad822@gmail.com"
                                    className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors truncate block"
                                >
                                    abdulmuizjimoh822@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Twitter/X */}
                        <div className="flex items-center gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20 transition-colors">
                                <i className="fab fa-twitter text-primary dark:text-primary-light text-lg"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Twitter/X
                                </p>
                                <a
                                    href="https://x.com/MuizMuayyad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors"
                                >
                                    @MuizMuayyad
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20 transition-colors">
                                <i className="fab fa-linkedin-in text-primary dark:text-primary-light text-lg"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    LinkedIn
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/abdulmuiz-jimoh-9298111b3/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors"
                                >
                                    AbdulMuiz Jimoh
                                </a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20 transition-colors">
                                <i className="fab fa-github text-primary dark:text-primary-light text-lg"></i>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                                <a
                                    href="https://github.com/Muayyad822"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors"
                                >
                                    Muayyad822
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-md">
                    <h4 className="text-xl font-bold mb-8 text-primary dark:text-primary-light">
                        How Can I Be Of Service To You?
                    </h4>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Full Name"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light transition-colors duration-200"
                        />

                        <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light transition-colors duration-200"
                        />

                        <input
                            type="text"
                            id="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light transition-colors duration-200"
                        />

                        <textarea
                            id="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light transition-colors duration-200"
                        ></textarea>

                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                className="bg-gray-700 dark:bg-gray-200 border-2 border-primary dark:border-primary-light text-white dark:text-gray-900 px-8 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/30 dark:hover:shadow-primary-light/30 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Send
                            </button>
                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                <i className="fab fa-whatsapp text-green-500 text-base"></i>
                                You'll be redirected to WhatsApp
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
