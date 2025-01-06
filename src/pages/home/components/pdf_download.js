import React from "react";
const PdfDownload = ({ isDarkMode }) => (

    <a
        href="/Anus_Gul_CV.pdf"
        download="Anus_Gul_CV.pdf"
        style={{
            display: 'inline-block',
            padding: '15px 30px',
            backgroundColor: isDarkMode ? '#FFFFFF' : '#004d40',

            color: '#1E1E1E',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.2em',
            fontWeight: 'bold',
            boxShadow: isDarkMode
                ? '0 4px 8px rgba(255, 255, 255, 0.1)' // Light shadow for dark mode
                : '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
    >
        Download CV
    </a>
);
export default PdfDownload;



