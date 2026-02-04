import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <main className="main-content">
                <Hero />
                <About />
                <Projects />
                <Footer />
            </main>

            <Navbar />
        </>
    );
}

export default App;
