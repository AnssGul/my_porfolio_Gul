import React from 'react';

const Skills = () => (
    <section style={{
        backgroundColor: '#F1F8E9', // Light green
        padding: '20px',
        borderRadius: '8px',
        margin: '20px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
    }}>
        <h2 style={{
            fontSize: '1.8em',
            marginBottom: '20px',
            color: '#004d40',
            borderBottom: '2px solid #00796B',
            display: 'inline-block',
            paddingBottom: '5px',
        }}>
            Key Skills
        </h2>
        <ul style={{
            textAlign: 'left',
            margin: '0 auto',
            maxWidth: '100%',
            listStyleType: 'square',
            alignItems: 'start',
            fontSize: '1.1em',
            lineHeight: '1.8',
        }}>
            <li>Expert in <strong>Flutter</strong> with two years of hands-on experience and proficiency in <strong>BLoC</strong>, <strong>GetX</strong>, Provider, Riverpod, and Redux state management.</li>
            <li>Seamless integration with Firebase, REST APIs, and third-party libraries in both mobile and web applications.</li>
            <li>Strong foundation in <strong>React</strong> and <strong>React Native</strong> for building dynamic and scalable web and mobile applications.</li>
            <li>Extensive experience in cross-platform development and creating responsive, user-friendly designs.</li>
            <li>Proven ability to implement secure authentication mechanisms, including Face ID and biometrics.</li>
            <li>Proficient in CI/CD pipelines, application lifecycle management, and performance optimization.</li>
            <li>Strong software engineering principles, including clean code, design patterns, and version control systems like Git.</li>

        </ul>
    </section>
);

export default Skills;
