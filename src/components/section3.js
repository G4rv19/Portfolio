import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// filepath: /Users/garv/Desktop/garv/src/components/section3.js

// Static styles
const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 1rem",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
};

const headingStyle = {
    fontFamily: "monospace",
    fontSize: "1.9rem",
    margin: 0,
    color: "#111827",
};

const gridStyle = {
    marginTop: "1.25rem",
    width: "min(980px, 92vw)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1rem",
};

const cardStyle = {
    borderRadius: "16px",
    padding: "1rem",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    boxShadow: "0 8px 20px rgba(17,24,39,0.06)",
    textAlign: "left",
};

const titleStyle = {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "#111827",
    margin: 0,
};

const descStyle = {
    marginTop: "0.5rem",
    color: "#374151",
    lineHeight: 1.6,
    fontSize: "0.98rem",
};

const linksRowStyle = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.85rem",
};

const pillBase = {
    fontSize: "0.9rem",
    padding: "0.42rem 0.7rem",
    borderRadius: "999px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    transition: "transform 0.15s ease",
};

const primaryPillStyle = {
    ...pillBase,
    background: "#111827",
    color: "#ffffff",
    border: "1px solid #111827",
};

const secondaryPillStyle = {
    ...pillBase,
    background: "#ffffff",
    color: "#111827",
    border: "1px solid #e5e7eb",
};

const Section3 = () => {
    const prefersReducedMotion = useReducedMotion();

    // Typing header
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Projects";

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

    const projects = [
        {
            title: "Mealy — Meal Prep Planner & Pantry Stock Manager",
            desc:
                "Plan meals, track pantry inventory, and avoid food waste with a simple, organized workflow.",
            site: "https://mealyapp.vercel.app/",
            github: null,
        },
        {
            title: "Mems — Capture moments together",
            desc:
                "Collaborative space to capture, share, and revisit memories with friends in real time.",
            site: "https://code-network-winter-hackathon-2025.vercel.app/",
            github: "https://github.com/reubendrummond/Code-Network-Winter-Hackathon-2025",
        },
    ];

    return (
        <div className="section3" style={containerStyle}>
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

            <div style={gridStyle}>
                {projects.map((p, i) => (
                    <motion.div
                        key={p.title}
                        style={cardStyle}
                        initial={prefersReducedMotion ? undefined : { y: 12, opacity: 0 }}
                        animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
                        transition={{ duration: 0.45, delay: 0.12 + i * 0.06, ease: "easeOut" }}
                        whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
                    >
                        <p style={titleStyle}>{p.title}</p>
                        <p style={descStyle}>{p.desc}</p>
                        <div style={linksRowStyle}>
                            <a
                                href={p.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit website for ${p.title}`}
                                style={primaryPillStyle}
                                onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
                                onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                            >
                                Visit Site
                            </a>
                            {p.github && (
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View GitHub repository for ${p.title}`}
                                    style={secondaryPillStyle}
                                    onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.98)"}
                                    onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                >
                                    GitHub Repo
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Section3;