import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaClock } from "react-icons/fa";

const Contact = () => (
    <section style={{
        backgroundColor: '#E8F5E9',
        padding: '30px',
        borderRadius: '10px',
        margin: '20px 0',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
        width: '100%',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }}>
        <h2 style={{
            fontSize: '2em',
            marginBottom: '25px',
            color: '#1B5E20',
            textAlign: 'center',
            borderBottom: '3px solid #66BB6A',
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
                <FaEnvelope style={{ color: '#1B5E20', marginRight: '10px' }} />
                <strong>Email:</strong>
                <a href="mailto:muhammadanss.0554@gmail.com" style={{
                    color: '#2E7D32',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>muhammadanss.0554@gmail.com</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaPhoneAlt style={{ color: '#1B5E20', marginRight: '10px' }} />
                <strong>Phone:</strong>
                <a href="tel:+923023275555" style={{
                    color: '#2E7D32',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>+92 302 3275555</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaLinkedin style={{ color: '#1B5E20', marginRight: '10px' }} />
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/muhammadanusgull/" target="_blank" rel="noopener noreferrer" style={{
                    color: '#2E7D32',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>muhammadanusgul</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaGithub style={{ color: '#1B5E20', marginRight: '10px' }} />
                <strong>GitHub:</strong>
                <a href="https://github.com/AnssGul" target="_blank" rel="noopener noreferrer" style={{
                    color: '#2E7D32',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>AnssGul</a>
            </li>
            <li style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
            }}>
                <FaClock style={{ color: '#1B5E20', marginRight: '10px' }} />
                <strong>WakaTime:</strong>
                <a href="https://wakatime.com/@Anusgul" target="_blank" rel="noopener noreferrer" style={{
                    color: '#2E7D32',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}>Anusgul</a>
            </li>
        </ul>
    </section>
);

export default Contact;
