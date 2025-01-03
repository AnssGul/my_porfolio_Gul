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
                backgroundColor: '#004d40', // Teal
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
                <h2 style={{ fontSize: '1.2em', fontWeight: 'lighter' }}>Software Engineer</h2>
            </div>

            {/* Right Section */}
            <div style={{
                flex: 2,
                backgroundColor: '#263238', // Dark gray-blue
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

                <a
                    href="/Anus_Gul_CV.pdf"
                    download="Anus_Gul_CV.pdf"
                    style={{
                        display: 'inline-block',
                        padding: '15px 30px',
                        backgroundColor: '#00796B', // Green-blue
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

            {/* Projects Section */}
            <section style={{
                margin: '20px 0',
                backgroundColor: '#F1F8E9',
                padding: '20px',
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
                <ul style={{
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '100%',
                    lineHeight: '1.8',
                    fontSize: '1.1em',
                }}>
                    <li><strong>Wineish App</strong> - <a href="https://play.google.com/store/apps/details?id=com.wineish.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
                    <li><strong>Read Maududi</strong> - <a href="https://apps.apple.com/us/app/read-maududi/id6711342459" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Apple App Store</a></li>
                    <li><strong>Quraan e Mubeen App</strong> - <a href="https://play.google.com/store/apps/details?id=com.quraanemubeen.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
                    <li><strong>iPassenger App</strong> - <a href="https://play.google.com/store/apps/details?id=com.ustf.ipassengerapp" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
                    <li><strong>Side of the Roads</strong> - <a href="https://play.google.com/store/apps/details?id=com.sideoftheroads.android" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Google Play Store</a></li>
                </ul>
            </section>

            {/* Contact Section */}
            <section style={{
                backgroundColor: '#F1F8E9',
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
                    <li><strong>Email:</strong> <a href="mailto:muhammadanss.0554@gmail.com" style={{ color: '#004d40' }}>muhammadanss.0554@gmail.com</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+923023275555" style={{ color: '#004d40' }}>+92 302 3275555</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammadanusgul" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>muhammadanusgul</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/AnssGul" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>AnssGul</a></li>
                    <li><strong>WakaTime:</strong> <a href="https://wakatime.com/@Anusgul" target="_blank" rel="noopener noreferrer" style={{ color: '#004d40' }}>Anusgul</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;

