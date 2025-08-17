import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import portraitImage from "../assets/Portrait.png";

// Static styles lifted outside the component (prevents recreating objects each render)
const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 1rem",
    textAlign: "center",
    backgroundColor: "#f3f3f3",
};

const portraitContainerStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "1.5rem",
    border: "3px solid #d8d8d8ff",
    background: "#f3f3f3ff",
};

const portraitImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
};

const headingStyle = {
    fontFamily: "monospace",
    fontSize: "2rem",
    margin: 0,
};

const Section1 = () => {
    // typing logic
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Hello, my name is Garv.";
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index += 1;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
            <div className="section1" style={containerStyle}>
                <div className="portrait-container" style={portraitContainerStyle}>
                    <img src={portraitImage} alt="Portrait of Garv" style={portraitImgStyle} />
                </div>

                <h1 style={headingStyle} aria-live="polite">
                    {displayedText}
                    {displayedText.length < fullText.length && (
                        <motion.span
                            animate={prefersReducedMotion ? undefined : { opacity: [1, 0, 1] }}
                            transition={prefersReducedMotion ? undefined : { duration: 0.8, repeat: Infinity }}
                            style={{ marginLeft: "2px" }}
                        >
                            |
                        </motion.span>
                    )}
                </h1>
            </div>
    )
}
export default Section1;