import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: '1.6',
            color: '#2c3e50',
        }}>
            {/* Profile Section */}
            <img
                src="/profile.jpg"
                alt="Muhammad Anus Gul"
                style={{
                    width: '300px',
                    borderRadius: '50%',
                    marginBottom: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            />
            <h1
                onClick={() => navigate('/bio')}
                style={{
                    fontSize: '2.8em',
                    color: '#0078D7',
                    cursor: 'pointer',
                    marginBottom: '10px',
                }}
            >
                Hi, I'm Muhammad Anus Gul
            </h1>
            <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
                A seasoned <strong>Flutter Developer</strong> with extensive expertise in crafting innovative, scalable, and user-friendly mobile applications. Proficient in <strong>BLoC</strong>, <strong>GetX</strong>, and other state management approaches. Passionate about clean code, performance optimization, and delivering seamless user experiences.
            </p>
            {/* CV Section */}
            <section style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                margin: '20px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <h2 style={{
                    fontSize: '1.8em',
                    marginBottom: '20px',
                    color: '#333',
                    borderBottom: '2px solid #0078D7',
                    display: 'inline-block',
                    paddingBottom: '5px',
                }}>
                    My CV
                </h2>
                <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
                    View or download my CV for more details about my experience and skills.
                </p>
                <a
                    href="/Anus_Gul_CV.pdf"
                    download="Anus_Gul_CV.pdf"
                    style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#0078D7',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        fontSize: '1.1em',
                    }}
                >
                    Download CV
                </a>
                <div style={{ marginTop: '20px', textAlign: 'left' }}>
                    <iframe
                        src="/Anus_Gul_CV.pdf"
                        style={{
                            width: '100%',
                            height: '500px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                        }}
                        title="Anus Gul CV"
                    />
                </div>
            </section>
            {/* Skills Highlights Section */}
            <section style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                margin: '20px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
                    maxWidth: '700px',
                    listStyleType: 'square',
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
                    maxWidth: '700px',
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
                    maxWidth: '600px',
                    fontSize: '1.1em',
                }}>
                    <li>Email: <a href="mailto:muhammadanss.0554@gmail.com" style={{ color: '#0078D7' }}>muhammadanss.0554@gmail.com</a></li>
                    <li>Phone: <a href="tel:+923023275555" style={{ color: '#0078D7' }}>+92 302 3275555</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/muhammadanusgul" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>muhammadanusgul</a></li>
                    <li>GitHub: <a href="https://github.com/AnssGul" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>AnssGul</a></li>
                    <li>WakaTime: <a href="https://wakatime.com/@Anusgul" target="_blank" rel="noopener noreferrer" style={{ color: '#0078D7' }}>Anusgul</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
