import React, { useEffect, useState } from 'react';
import { FaReact, FaFigma, FaAndroid, FaJava } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiRedux, SiCanva } from 'react-icons/si';
import { IoLogoApple } from 'react-icons/io5';



const Technologies = ({ isDarkMode }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger the animation once the component is mounted
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // Set to true after 0.5 seconds to trigger animation
        }, 500);

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    return (
        <section
            style={{
                backgroundColor: isDarkMode ? "#1E1E1E" : "#3B2CACFF", // Blue background
                color: isDarkMode ? "#FFFFFF" : "#160EACFF",
                padding: "20px",
                borderRadius: "8px",
                margin: "20px 0",
                boxShadow: isDarkMode
                    ? "0 4px 8px rgba(255, 255, 255, 0.1)"
                    : "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "100%",
                transition: "all 1s ease-out",
                opacity: isVisible ? 1 : 0, // Start with opacity 0 and fade in
                transform: isVisible ? "translateY(0)" : "translateY(20px)", // Slide in effect
            }}
        >
            <h2
                style={{
                    fontSize: "1.8em",
                    marginBottom: "20px",
                    color: isDarkMode ? "#E0E0E0" : "#FFFFFFFF", // White text for better contrast
                    borderBottom: `2px solid ${isDarkMode ? "#E0E0E0" : "#FFFFFFFF"}`,
                    display: "inline-block",
                    paddingBottom: "5px",
                }}
            >
                Technologies I Work With
            </h2>
            <ul
                style={{
                    textAlign: "left",
                    margin: "0 auto",
                    maxWidth: "100%",
                    listStyle: "none",
                    alignItems: "start",
                    fontSize: "1.1em",
                    lineHeight: "1.8",
                    padding: 0,
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: "20px",
                    color: "#FFFFFFFF"
                }}
            >
                <li style={animateItemStyle}>
                    <SiFlutter /> Flutter
                </li>
                <li style={animateItemStyle}>
                    <SiDart /> Dart
                </li>
                <li style={animateItemStyle}>
                    <SiFirebase /> Firebase
                </li>
                <li style={animateItemStyle}>
                    <FaReact /> React
                </li>
                <li style={animateItemStyle}>
                    <FaReact /> React Native
                </li>
                <li style={animateItemStyle}>
                    <SiRedux /> API Integration
                </li>
                <li style={animateItemStyle}>
                    <SiRedux /> BLoC
                </li>
                <li style={animateItemStyle}>
                    <SiRedux /> GetX
                </li>
                <li style={animateItemStyle}>
                    <FaFigma /> Figma
                </li>
                <li style={animateItemStyle}>
                    <SiCanva /> Canva
                </li>
                <li style={animateItemStyle}>
                    <SiRedux /> RESTful
                </li>
                <li style={animateItemStyle}>
                    <FaJava /> Java
                </li>
                <li style={animateItemStyle}>
                    <IoLogoApple /> iOS
                </li>
                <li style={animateItemStyle}>
                    <FaAndroid /> Android
                </li>
            </ul>

            <style>
                {`
                    @keyframes fadeInSlide {
                        0% {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    li {
                        animation: fadeInSlide 0.8s forwards;
                    }
                `}
            </style>
        </section>
    );
};

const animateItemStyle = {
    opacity: 0,
    transform: "translateY(10px)",
    animationDelay: "0.2s",
};

export default Technologies;
