import React from 'react';


const Projects = () => {
    const projectData = [
        {
            title: 'Wineish',
            tech: 'Flutter (Bloc)',
            description: 'Developed an app offering job listings, event details, wine pairing suggestions, and chat features for users.',
            link: 'https://play.google.com/store/apps/details?id=com.wineish.app&pcampaignid=web_share',
            thumbnail: '/wineish.svg'
        },
        {
            title: 'Quraan e Mubeen',
            tech: 'Flutter (Bloc)',
            description: 'Discover Quran recitations, prayer times, daily duas, and Hadith collections in our Islamic app.',
            link: 'https://play.google.com/store/apps/details?id=com.quraanemubeen.app&pcampaignid=web_share',
            thumbnail: '/quran.png'
        },
        {
            title: 'Read Maududi',
            tech: 'Flutter (Bloc)',
            description: 'Developed an app offering access to content related to Maulana Maududi, allowing users to read, listen to audio, and watch videos, providing a comprehensive platform for exploring his work. Stay connected to your faith with reminders and spiritual insights.',
            link: 'https://apps.apple.com/us/app/read-maududi/id6711342459',
            thumbnail: '/read_maududi.svg'
        },
        {
            title: 'IPassenger',
            tech: 'Flutter (GETx)',
            description: 'A ride-sharing app providing seamless, secure, and reliable transportation services with user-friendly features.',
            link: 'https://play.google.com/store/apps/details?id=com.ustf.ipassengerapp',
            thumbnail: '/ipassenger.svg'
        },
        {
            title: 'Side of the Road',
            tech: 'Flutter (GETx)',
            description: 'Side of the Road is your neighborhood\'s digital hub. Discover free stuff, explore local businesses and vendors, and find upcoming events. Join our vibrant community and participate in monthly contests for a chance to win exciting prizes, just by signing up.',
            link: 'https://play.google.com/store/apps/details?id=com.sideoftheroads.android',
            thumbnail: '/sotr.svg'
        },
        {
            title: 'Nairobi Professional',
            tech: 'Flutter (GETx)',
            description: 'Nairobi Professional connects stylists, brands & YOU!',
            link: 'https://play.google.com/store/apps/details?id=com.nairobi.professional&pcampaignid=web_share',
            thumbnail: '/nairobi.svg'
        },
    ];

    return (
        <section style={{
            padding: '20px',
            backgroundColor: '#F1F8E9',
            borderRadius: '8px',
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
                Live Projects
            </h2>
            <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '15px',
                padding: '10px 0',
                scrollbarWidth: 'thin',
                scrollBehavior: 'smooth',
                flexWrap: 'nowrap',
            }}>
                {projectData.map((project, index) => (
                    <div key={index} style={{
                        minWidth: '250px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '15px',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <img src={project.thumbnail} alt={project.title} style={{
                            width: 'custom',
                            height: 'custom',
                            objectFit: 'contain',
                            borderRadius: '8px',
                            marginBottom: '10px',
                        }} />
                        <h3 style={{ fontSize: '1.3em', color: '#004d40' }}>{project.title}</h3>
                        <p style={{ fontSize: '0.9em', color: '#777', margin: '10px 0' }}>
                            <strong>Tech Stack:</strong> {project.tech}
                        </p>
                        <p style={{ fontSize: '0.9em', color: '#555', marginBottom: '15px' }}>
                            {project.description}
                        </p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                            fontSize: '0.9em',
                            color: '#FFFFFF',
                            backgroundColor: '#004d40',
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

// const Projects = () => {
//     const projectData = [
//         {
//             title: 'Wineish',
//             tech: 'Flutter (Bloc)',
//             description: 'Developed an app offering job listings, event details, wine pairing suggestions, and chat features for users.',
//             link: 'https://play.google.com/store/apps/details?id=com.wineish.app&pcampaignid=web_share',
//         },
//         {
//             title: 'Quraan e Mubeen',
//             tech: 'Flutter (Bloc)',
//             description: 'Discover Quran recitations, prayer times, daily duas, and Hadith collections in our Islamic app.',
//             link: 'https://play.google.com/store/apps/details?id=com.quraanemubeen.app&pcampaignid=web_share',
//         },
//         {
//             title: 'Read Maududi',
//             tech: 'Flutter (Bloc)',
//             description: 'Developed an app offering access to content related to Maulana Maududi, allowing users to read, listen to audio, and watch videos, providing a comprehensive platform for exploring his work. Stay connected to your faith with reminders and spiritual insights.',
//             link: 'https://apps.apple.com/us/app/read-maududi/id6711342459',
//         },
//         {
//             title: 'IPassenger',
//             tech: 'Flutter (GETx)',
//             description: 'A ride-sharing app providing seamless, secure, and reliable transportation services with user-friendly features.',
//             link: 'https://play.google.com/store/apps/details?id=com.ustf.ipassengerapp',
//         },
//         {
//             title: 'Side of the Road',
//             tech: 'Flutter (GETx)',
//             description: 'Side of the Road is your neighborhood\'s digital hub. Discover free stuff, explore local businesses and vendors, and find upcoming events. Join our vibrant community and participate in monthly contests for a chance to win exciting prizes, just by signing up.',
//             link: 'https://play.google.com/store/apps/details?id=com.sideoftheroads.android',
//         },
//         {
//             title: 'Nairobi Professional',
//             tech: 'Flutter (GETx)',
//             description: 'Nairobi Professional connects stylists, brands & YOU!',
//             link: 'https://play.google.com/store/apps/details?id=com.nairobi.professional&pcampaignid=web_share',
//         },
//     ];

//     return (
//         <section style={{
//             padding: '20px',
//             backgroundColor: '#F1F8E9',
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             width: '100%',
//         }}>
//             <h2 style={{
//                 fontSize: '1.8em',
//                 marginBottom: '20px',
//                 color: '#004d40',
//                 borderBottom: '2px solid #00796B',
//                 display: 'inline-block',
//                 paddingBottom: '5px',
//             }}>
//                 Live Projects
//             </h2>
//             <div style={{
//                 display: 'flex',
//                 overflowX: 'auto',
//                 gap: '15px',
//                 padding: '10px 0',
//                 scrollbarWidth: 'thin',
//                 scrollBehavior: 'smooth',
//                 flexWrap: 'nowrap', // Prevent wrapping
//             }}>
//                 {projectData.map((project, index) => (
//                     <div key={index} style={{
//                         minWidth: '250px',
//                         backgroundColor: '#FFFFFF',
//                         borderRadius: '8px',
//                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                         padding: '15px',
//                         textAlign: 'left',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'space-between',
//                     }}>
//                         <h3 style={{ fontSize: '1.3em', color: '#004d40' }}>{project.title}</h3>
//                         <p style={{ fontSize: '0.9em', color: '#777', margin: '10px 0' }}>
//                             <strong>Tech Stack:</strong> {project.tech}
//                         </p>
//                         <p style={{ fontSize: '0.9em', color: '#555', marginBottom: '15px' }}>
//                             {project.description}
//                         </p>
//                         <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
//                             fontSize: '0.9em',
//                             color: '#FFFFFF',
//                             backgroundColor: '#004d40',
//                             textDecoration: 'none',
//                             fontWeight: 'bold',
//                             padding: '10px 15px',
//                             borderRadius: '5px',
//                             textAlign: 'center',
//                         }}>
//                             Visit Project
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Projects;


// const Projects = () => (
//     <section style={{
//         margin: '20px 0',
//         backgroundColor: '#F1F8E9',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         width: '100%',
//     }}>
//         <h2 style={{
//             fontSize: '1.8em',
//             marginBottom: '20px',
//             color: '#004d40',
//             borderBottom: '2px solid #00796B',
//             display: 'inline-block',
//             paddingBottom: '5px',
//         }}>
//             Live Projects
//         </h2>
//         <ul style={{
//             textAlign: 'left',
//             margin: '0 auto',
//             maxWidth: '100%',
//             lineHeight: '1.8',
//             fontSize: '1.1em',
//         }}>
//             <li><strong>Wineish App</strong> - <a href="https://play.google.com/store/apps/details?id=com.wineish.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
//             <li><strong>Read Maududi</strong> - <a href="https://apps.apple.com/us/app/read-maududi/id6711342459" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Apple App Store</a></li>
//             <li><strong>Quraan e Mubeen App</strong> - <a href="https://play.google.com/store/apps/details?id=com.quraanemubeen.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
//             <li><strong>iPassenger App</strong> - <a href="https://play.google.com/store/apps/details?id=com.ustf.ipassengerapp" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
//             <li><strong>Side of the Roads</strong> - <a href="https://play.google.com/store/apps/details?id=com.sideoftheroads.android" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
//         </ul>
//     </section>
// );

// export default Projects;

