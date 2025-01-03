import React from "react";
const Contact = () => (
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
);
export default Contact;