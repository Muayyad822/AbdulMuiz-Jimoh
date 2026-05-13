import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-montserrat transition-colors duration-300">
            <Header />
            <main>
                <Hero />
                <Skills />
                <Tools />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;
