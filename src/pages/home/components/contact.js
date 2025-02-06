import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaClock } from "react-icons/fa";

const Contact = ({ isDarkMode }) => (
    <section style={{
        backgroundColor: isDarkMode ? "#1E1E1E" : "#3B2CACFF",
        padding: '30px',
        borderRadius: '10px',
        margin: '20px 0',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        width: '100%',

        marginLeft: 'auto',
        marginRight: 'auto',
    }}>
        <h2 style={{
            fontSize: '2em',
            marginBottom: '25px',
            color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF',
            textAlign: 'center',
            borderBottom: `2px solid ${isDarkMode ? '#E0E0E0' : '#160EACFF'}`,
            display: 'inline-block',
            paddingBottom: '8px',
        }}>
            Contact Me
        </h2>
        <ul style={{
            listStyleType: 'none',
            padding: 0,
            margin: '0 auto',
            fontSize: '1.2em',
        }}>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaEnvelope style={{ color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF', marginRight: '10px' }} />
                <strong>Email:</strong>
                <a href="mailto:muhammadanss.0554@gmail.com" style={{
                    color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>muhammadanss.0554@gmail.com</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaPhoneAlt style={{ color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF', marginRight: '10px' }} />
                <strong>Phone:</strong>
                <a href="tel:+923023275555" style={{
                    color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>+92 302 3275555</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaLinkedin style={{ color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF', marginRight: '10px' }} />
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/muhammadanusgull/" target="_blank" rel="noopener noreferrer" style={{
                    color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>muhammadanusgul</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaGithub style={{ color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF', marginRight: '10px' }} />
                <strong>GitHub:</strong>
                <a href="https://github.com/AnssGul" target="_blank" rel="noopener noreferrer" style={{
                    color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>AnssGul</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaClock style={{ color: isDarkMode ? '#E0E0E0' : '#FFFFFFFF', marginRight: '10px' }} />
                <strong>WakaTime:</strong>
                <a href="https://wakatime.com/@Anusgul" target="_blank" rel="noopener noreferrer" style={{
                    color: isDarkMode ? '#E0E0E0' : '#E0E0E0',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>Anusgul</a>
            </li>
        </ul>
    </section>
);

export default Contact;

