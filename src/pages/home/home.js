import { FiSun, FiMoon } from 'react-icons/fi';
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Profile } from './components/profile';
import Skills from './components/keyskills';
import Projects from './components/projects';
import Contact from './components/contact';
import PdfDownload from './components/pdf_download';
import Technologies from './components/technologies';





const Home = ({ isDarkMode, toggleDarkMode }) => {
    const navigate = useNavigate();
    const sidebarRef = useRef(null);
    const profileRef = useRef(null);
    const contentRef = useRef(null);
    const handleNavigateToBio = () => {
        navigate('/bio'); // Navigate to the bio route
    };

    useEffect(() => {
        const sidebarElement = sidebarRef.current;
        const profileElement = profileRef.current;
        const contentElement = contentRef.current;

        if (sidebarElement) {

            sidebarElement.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                sidebarElement.style.transition = 'transform 1s ease-in-out';
                sidebarElement.style.transform = 'translateX(0)';
            }, 100);
        }

        if (profileElement) {

            let pos = 0;
            let direction = 1; // 1 for forward, -1 for backward
            const bounce = () => {
                if (pos >= 10 || pos <= -10) direction *= -1;
                pos += direction;
                profileElement.style.transform = `translateY(${pos}px)`;
                requestAnimationFrame(bounce);

            };
            requestAnimationFrame(bounce);

        }

        if (contentElement) {
            // Content fade-in and scale-up
            contentElement.style.opacity = 0;
            contentElement.style.transform = 'scale(0.8)';
            setTimeout(() => {
                contentElement.style.transition = 'all 1s ease-out';
                contentElement.style.opacity = 1;
                contentElement.style.transform = 'scale(1)';
            }, 300);
        }
    }, []); // Only run once on mount

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: '100vh',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
                color: isDarkMode ? '#FFFFFF' : '#000000',
                transition: 'all 0.3s ease',
            }}
        >
            {/* App Bar */}
            <header
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    padding: '10px 20px',
                    backgroundColor: isDarkMode ? '#1E1E1E' : '#160EACFF',
                    color: '#FFFFFF',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            >

                <button
                    onClick={toggleDarkMode}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#FFFFFF',
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        transition: 'transform 0.3s ease',
                    }}

                >
                    {isDarkMode ? <FiSun /> : <FiMoon />}

                </button>
            </header>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                style={{
                    flex: 1,
                    backgroundColor: isDarkMode ? '#1E1E1E' : '#160EACFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFFFFF',
                    padding: '20px',
                    minWidth: '300px',
                    transform: 'translateX(-100%)',
                    transition: 'transform 1s ease-in-out',
                }}
            >
                <Profile ref={profileRef} />
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '10px' }}>
                    Muhammad Anus Gul
                </h1>
                <h2 style={{ fontSize: '1.2em', fontWeight: 'lighter' }}>Software Engineer</h2>
            </div>

            {/* Main Content */}
            <div
                ref={contentRef}
                style={{
                    flex: 2,
                    backgroundColor: isDarkMode ? '#1E1E1E' : '#3B2CACFF',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '40px',
                    minWidth: '300px',
                    opacity: 0,
                    transform: 'scale(0.8)',
                    transition: 'all 1s ease-out',
                }}
            >
                <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>
                    Hi, I'm Muhammad Anus Gul
                </h1>
                <p style={{ fontSize: '1.2em', lineHeight: '1.8', marginBottom: '40px' }}>
                    A versatile and dedicated <strong>Software Engineer</strong> with expertise in
                    crafting scalable, user-friendly applications across platforms. Skilled in{' '}
                    <strong>Flutter</strong>, <strong>React</strong>, and <strong>React Native</strong>,
                    with a strong focus on performance optimization, state management, and seamless
                    integration of modern technologies.
                </p>
                <PdfDownload isDarkMode={isDarkMode} />
            </div>

            {/* Additional Sections */}
            <Technologies isDarkMode={isDarkMode} />
            <Skills isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
        </div>
    );
};

export default Home;
