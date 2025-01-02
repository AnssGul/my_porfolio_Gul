import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            {/* Left Section */}
            <div style={{
                flex: 1,
                backgroundColor: '#FF5722',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',
                padding: '20px',
                minWidth: '300px',
            }}>
                <img
                    src="/profile.jpg"
                    alt="Muhammad Anus Gul"
                    style={{
                        width: '202px',
                        height: '202px',
                        borderRadius: '50%',
                        marginBottom: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                />
                <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '10px' }}>
                    Muhammad Anus Gul
                </h1>
                <h2 style={{ fontSize: '1.2em', fontWeight: 'lighter' }}>Flutter Developer</h2>
            </div>

            {/* Right Section */}
            <div style={{
                flex: 2,
                backgroundColor: '#1A1A1A',
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
                    A seasoned <strong>Flutter Developer</strong> with expertise in crafting scalable, user-friendly mobile applications. Proficient in <strong>BLoC</strong>, <strong>GetX</strong>, and performance optimization.
                </p>
                <a
                    href="/Anus_Gul_CV.pdf"
                    download="Anus_Gul_CV.pdf"
                    style={{
                        display: 'inline-block',
                        padding: '15px 30px',
                        backgroundColor: '#FF5722',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    Download CV
                </a>
            </div>

            {/* Skills Highlights Section */}
            <section style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                margin: '20px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
            }}>
                <h2 style={{
                    fontSize: '1.8em',
                    marginBottom: '20px',
                    color: '#333',
                    borderBottom: '2px solid #0078D7',
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
                    alignItems: "start",
                    fontSize: '1.1em',
                    lineHeight: '1.8',
                }}>
                    <li>Expert in <strong>Flutter</strong> with proficiency in <strong>BLoC</strong>, <strong>GetX</strong>, Provider, Riverpod, and Redux state management.</li>
                    <li>Seamless integration with Firebase, REST APIs, and third-party libraries.</li>
                    <li>Strong knowledge of CI/CD pipelines and performance optimization in Flutter apps.</li>
                    <li>Extensive experience in cross-platform mobile development and responsive design.</li>
                    <li>Hands-on knowledge of implementing secure authentication mechanisms like Face ID and biometrics.</li>
                    <li>Basic proficiency in <strong>React</strong> for web development.</li>
                </ul>
            </section>

            {/* Projects Section */}
            <section style={{
                margin: '20px 0',
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%', // Ensure it takes full width on smaller screens
            }}>
                <h2 style={{
                    fontSize: '1.8em',
                    marginBottom: '20px',
                    color: '#333',
                    borderBottom: '2px solid #0078D7',
                    display: 'inline-block',
                    paddingBottom: '5px',
                }}>
                    Live Projects
                </h2>
                <ul style={{
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '100%',
                    lineHeight: '1.8',
                    fontSize: '1.1em',
                }}>
                    <li>
                        <strong>Wineish App</strong>
                        - <a href="https://play.google.com/store/apps/details?id=com.wineish.app&pcampaignid=web_share"
                            target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>
                            Google Play Store
                        </a>
                    </li>
                    <li>
                        <strong>Read Maududi</strong>
                        - <a href="https://apps.apple.com/us/app/read-maududi/id6711342459"
                            target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>
                            Apple App Store
                        </a>
                    </li>
                    <li>
                        <strong>Quraan e Mubeen App</strong>
                        - <a href="https://play.google.com/store/apps/details?id=com.quraanemubeen.app&pcampaignid=web_share"
                            target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>
                            Google Play Store
                        </a>
                    </li>
                    <li>
                        <strong>iPassenger App</strong>
                        - <a href="https://play.google.com/store/apps/details?id=com.ustf.ipassengerapp"
                            target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>
                            Google Play Store
                        </a>
                    </li>
                    <li>
                        <strong>Side of the Roads</strong>
                        - <a href="https://play.google.com/store/apps/details?id=com.sideoftheroads.android"
                            target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>
                            Google Play Store
                        </a>
                    </li>
                </ul>
            </section>

            {/* Contact Section */}
            <section style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                margin: '20px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%', // Ensure it takes full width on smaller screens
            }}>
                <h2 style={{
                    fontSize: '1.8em',
                    marginBottom: '20px',
                    color: '#333',
                    borderBottom: '2px solid #0078D7',
                    display: 'inline-block',
                    paddingBottom: '5px',
                }}>
                    Contact Me
                </h2>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '100%',
                    fontSize: '1.1em',
                }}>
                    <li><strong>Email:</strong> <a href="mailto:muhammadanss.0554@gmail.com" style={{ color: '#0078D7' }}>muhammadanss.0554@gmail.com</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+923023275555" style={{ color: '#0078D7' }}>+92 302 3275555</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammadanusgul" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>muhammadanusgul</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/AnssGul" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>AnssGul</a></li>
                    <li><strong>WakaTime:</strong> <a href="https://wakatime.com/@Anusgul" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>Anusgul</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;






// ...existing code...
<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
    {/* Left Section */}
    <div style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
        color: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '40px',
        minWidth: '300px',
    }}>
        <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Skills</h2>
        <ul style={{ fontSize: '1.2em', lineHeight: '1.8', marginBottom: '40px' }}>
            <li>Flutter</li>
            <li>BLoC</li>
            <li>GetX</li>
            <li>Performance Optimization</li>
        </ul>
        <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Contact</h2>
        <p style={{ fontSize: '1.2em', lineHeight: '1.8', marginBottom: '40px' }}>
            Email: example@example.com<br />
            Phone: +1234567890
        </p>
        <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Live Projects</h2>
        <ul style={{ fontSize: '1.2em', lineHeight: '1.8', marginBottom: '40px' }}>
            <li><a href="https://project1.com" target="_blank" rel="noopener noreferrer">Project 1</a></li>
            <li><a href="https://project2.com" target="_blank" rel="noopener noreferrer">Project 2</a></li>
            <li><a href="https://project3.com" target="_blank" rel="noopener noreferrer">Project 3</a></li>
        </ul>
    </div>

    {/* Right Section */}
    <div style={{
        flex: 2,
        backgroundColor: '#1A1A1A',
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
            A seasoned <strong>Flutter Developer</strong> with expertise in crafting scalable, user-friendly mobile applications. Proficient in <strong>BLoC</strong>, <strong>GetX</strong>, and performance optimization.
        </p>
        <a
            href="/Anus_Gul_CV.pdf"
            download="Anus_Gul_CV.pdf"
            style={{
                display: 'inline-block',
                padding: '15px 30px',
                backgroundColor: '#FF5722',
                color: '#FFFFFF',
                textDecoration: 'none',
                borderRadius: '5px',
            }}
        >
            Download CV
        </a>
    </div>
</div>
// ...existing code...