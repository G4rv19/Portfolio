import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";



// Static styles lifted outside the component (prevents recreating objects each render)
const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 1rem",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
};

const iconContainerStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    background: "linear-gradient(135deg, #111827, #1f2937)",
    color: "#ffffff",
    fontSize: "28px",
    boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
};

const headingStyle = {
    fontFamily: "monospace",
    fontSize: "1.75rem",
    margin: 5,
    color: "#111827",
};

const cardStyle = {
    marginTop: "1.25rem",
    width: "min(680px, 92vw)",
    borderRadius: "16px",
    padding: "1rem",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 20px rgba(17,24,39,0.06)",
    textAlign: "left",
};

const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
    flexWrap: "wrap",
};

const titleStyle = {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "#111827",
    margin: 0,
};

const companyPillStyle = {
    fontSize: "0.85rem",
    background: "#111827",
    color: "#ffffff",
    padding: "0.35rem 0.6rem",
    borderRadius: "999px",
    whiteSpace: "nowrap",
};

const metaStyle = {
    marginTop: "0.4rem",
    color: "#6b7280",
    fontSize: "0.92rem",
};

const bulletsStyle = {
    marginTop: "0.75rem",
    paddingLeft: "1rem",
    color: "#374151",
    lineHeight: 1.6,
};

const Section2 = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "My Work Experience";
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
        }, 75);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section2" style={containerStyle}>
            <h1 style={headingStyle} aria-live="polite">
                <span>{displayedText}</span>
            </h1>
            <motion.div
                style={cardStyle}
                initial={prefersReducedMotion ? undefined : { y: 12, opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
            >
                <div style={rowStyle}>
                    <p style={titleStyle}>Intern Developer</p>
                    <span style={companyPillStyle}>TwoDotAI</span>
                </div>
                <p style={metaStyle}>Present • On-site</p>
                <ul style={bulletsStyle}>
                    <li>Building mvp AI Agents for optimising buisness and saving hours.</li>
                    <li>Contributing to Api's and Agentic models for different use cases and workflows.</li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Section2;