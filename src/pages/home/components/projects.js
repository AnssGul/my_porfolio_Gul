import React, { useState, useEffect } from 'react';




const Projects = ({ isDarkMode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const projectData = [
        {
            title: 'Wineish',
            tech: 'Flutter (Bloc)',
            description: 'Developed an app offering job listings, event details, wine pairing suggestions, and chat features for users.',
            link: 'https://play.google.com/store/apps/details?id=com.wineish.app&pcampaignid=web_share',
            thumbnail: '/svg/wineish.svg'
        },
        {
            title: 'Quraan e Mubeen',
            tech: 'Flutter (Bloc)',
            description: 'Discover Quran recitations, prayer times, daily duas, and Hadith collections in our Islamic app.',
            link: 'https://play.google.com/store/apps/details?id=com.quraanemubeen.app&pcampaignid=web_share',
            thumbnail: '/png/quran.png'
        },
        {
            title: 'Read Maududi',
            tech: 'Flutter (Bloc)',
            description: 'Developed an app offering access to content related to Maulana Maududi, allowing users to read, listen to audio, and watch videos, providing a comprehensive platform for exploring his work. Stay connected to your faith with reminders and spiritual insights.',
            link: 'https://apps.apple.com/us/app/read-maududi/id6711342459',
            thumbnail: '/svg/read_maududi.svg'
        },
        {
            title: 'IPassenger',
            tech: 'Flutter (GETx)',
            description: 'A ride-sharing app providing seamless, secure, and reliable transportation services with user-friendly features.',
            link: 'https://play.google.com/store/apps/details?id=com.ustf.ipassengerapp',
            thumbnail: '/svg/ipassenger.svg'
        },
        {
            title: 'Side of the Road',
            tech: 'Flutter (GETx)',
            description: 'Side of the Road is your neighborhood\'s digital hub. Discover free stuff, explore local businesses and vendors, and find upcoming events. Join our vibrant community and participate in monthly contests for a chance to win exciting prizes, just by signing up.',
            link: 'https://play.google.com/store/apps/details?id=com.sideoftheroads.android',
            thumbnail: '/svg/sotr.svg'
        },
        {
            title: 'Nairobi Professional',
            tech: 'Flutter (GETx)',
            description: 'Nairobi Professional connects stylists, brands & YOU!',
            link: 'https://play.google.com/store/apps/details?id=com.nairobi.professional&pcampaignid=web_share',
            thumbnail: '/svg/nairobi.svg'
        },
    ];
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section style={{
            padding: '20px',
            backgroundColor: isDarkMode ? '#1E1E1E' : '#F1F8E9',
            borderRadius: '8px',
            boxShadow: isDarkMode
                ? '0 4px 8px rgba(255, 255, 255, 0.1)'
                : '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
        }}>
            <h2 style={{
                fontSize: '1.8em',
                marginBottom: '20px',
                color: isDarkMode ? '#E0E0E0' : '#004d40',
                borderBottom: `2px solid ${isDarkMode ? '#E0E0E0' : '#00796B'}`,
                display: 'inline-block',
                paddingBottom: '5px',
            }}>
                Live Projects
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '15px',
                padding: '10px 0',
            }}>
                {projectData.map((project, index) => (
                    <div key={index} style={{
                        backgroundColor: isDarkMode ? '#1E1E1E' : '#F1F8E9',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '15px',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.5s ease ${index * 0.1}s`,
                    }}>
                        <img src={project.thumbnail} alt={project.title} style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            marginBottom: '10px',
                        }} />
                        <h3 style={{ fontSize: '1.3em', color: isDarkMode ? '#E0E0E0' : '#004d40', }}>{project.title}</h3>
                        <p style={{ fontSize: '0.9em', color: isDarkMode ? '#B0B0B0' : '#777', margin: '10px 0' }}>
                            <strong>Tech Stack:</strong> {project.tech}
                        </p>
                        <p style={{ fontSize: '0.9em', color: isDarkMode ? '#B0B0B0' : '#555', marginBottom: '15px' }}>
                            {project.description}
                        </p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                            fontSize: '0.9em',
                            color: isDarkMode ? '#1E1E1E' : '#F1F8E9',
                            backgroundColor: isDarkMode ? '#E0E0E0' : '#004d40',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            textAlign: 'center',
                        }}>
                            Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;







