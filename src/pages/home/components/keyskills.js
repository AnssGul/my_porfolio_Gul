import React, { useState, useEffect } from 'react';
const Skills = ({ isDarkMode }) => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (

        <section
            style={{
                backgroundColor: isDarkMode ? "#1E1E1E" : "#3B2CACFF",
                color: isDarkMode ? '#FFFFFF' : '#160EACFF',
                padding: '20px',
                borderRadius: '8px',
                margin: '20px 0',
                boxShadow: isDarkMode
                    ? '0 4px 8px rgba(255, 255, 255, 0.1)'
                    : '#5D59CBFF',
                width: '100%',
                opacity: isVisible ? 1 : 0, // Start with opacity 0 and fade in
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Slide in effect
                transition: 'all 1s ease-out', // Smooth animation transition

            }}
        >
            <h2
                style={{
                    fontSize: '1.8em',
                    marginBottom: '20px',
                    color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF',
                    borderBottom: `2px solid ${isDarkMode ? '#E0E0E0' : '#160EACFF'}`,
                    display: 'inline-block',
                    paddingBottom: '5px',
                }}
            >
                Key Skills
            </h2>
            <ul
                style={{
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '100%',
                    listStyleType: 'square',
                    alignItems: 'start',
                    fontSize: '1.1em',
                    lineHeight: '1.8',
                    color: isDarkMode ? '#FFFFFF' : '#FFFFFFFF',
                }}
            >
                <li style={animateItemStyle}>Expert in <strong>Flutter</strong> with two years of hands-on experience and proficiency in <strong>BLoC</strong>, <strong>GetX</strong>, Provider, Riverpod, and Redux state management.</li>
                <li style={animateItemStyle}>Seamless integration with Firebase, REST APIs, and third-party libraries in both mobile and web applications.</li>
                <li style={animateItemStyle}>Strong foundation in <strong>React</strong> and <strong>React Native</strong> for building dynamic and scalable web and mobile applications.</li>
                <li style={animateItemStyle}>Extensive experience in cross-platform development and creating responsive, user-friendly designs.</li>                 <li style={animateItemStyle}>Proven ability to implement secure authentication mechanisms, including Face ID and biometrics.</li>
                <li style={animateItemStyle}>Proficient in CI/CD pipelines, application lifecycle management, and performance optimization.</li>
                <li style={animateItemStyle}>Strong software engineering principles, including clean code, design patterns, and version control systems like Git.</li>
            </ul>
        </section >
    );
};
const animateItemStyle = {
    opacity: 0,
    transform: 'translateY(10px)',
    animationDelay: '0.2s',

};
export default Skills;






