import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Profile } from './components/profile';
import Skills from './components/keyskills';
import Projects from './components/projects';
import Contact from './components/contact';
import PdfDownload from './components/pdf_download';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
            flexWrap: 'wrap',
        }}>
            <div style={{
                flex: 1,
                backgroundColor: '#004d40',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',
                padding: '20px',
                minWidth: '300px',
            }}>
                <Profile />
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '10px' }}>
                    Muhammad Anus Gul
                </h1>
                <h2 style={{ fontSize: '1.2em', fontWeight: 'lighter' }}>Software Engineer</h2>
            </div>
            <div style={{
                flex: 2,
                backgroundColor: '#263238',
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '40px',
                minWidth: '300px',
            }}>
                <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>
                    Hi, I'm Muhammad Anus Gul
                </h1>
                <p style={{ fontSize: '1.2em', lineHeight: '1.8', marginBottom: '40px' }}>
                    A versatile and dedicated <strong>Software Engineer</strong> with expertise in crafting scalable, user-friendly applications across platforms. Skilled in <strong>Flutter</strong>, <strong>React</strong>, and <strong>React Native</strong>, with a strong focus on performance optimization, state management, and seamless integration of modern technologies.
                </p>
                <PdfDownload />
            </div>
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;

