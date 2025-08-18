import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";



// Static styles lifted outside the component (prevents recreating objects each render)
const wrapperStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    padding: "0.6rem 0.75rem",
    // Translucent, modern glassy look
    backgroundColor: "rgba(255, 255, 255, 0.55)",
    backdropFilter: "saturate(160%) blur(10px)",
    WebkitBackdropFilter: "saturate(160%) blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
};

const barStyle = {
    width: "min(1100px, 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const navListStyle = {
    listStyle: "none",
    display: "flex",
    gap: "1.2rem",
    margin: 0,
    padding: 0,
};

const linkBaseStyle = {
    position: "relative",
    display: "inline-block",
    padding: "0.35rem 0.2rem",
    fontFamily: "monospace",
    fontSize: "0.95rem",
    color: "#111",
    textDecoration: "none",
    letterSpacing: "0.02em",
    outline: "none",
    transition: "color 160ms ease",
};

const activeLinkStyle = {
    color: "#000",
    fontWeight: 600,
};

const focusRingStyle = {
    boxShadow: "0 0 0 3px rgba(0,0,0,0.08)",
    borderRadius: "6px",
};

const underlineStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "2px",
    background:
        "linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,0,0.55))",
    transformOrigin: "left center",
    borderRadius: "2px",
};

const links = [
    { href: "#home", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const Navbar = () => {
    const [active, setActive] = useState(
        typeof window !== "undefined" && window.location.hash
            ? window.location.hash
            : "#home"
    );
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const onHashChange = () => setActive(window.location.hash || "#home");
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const onClickLink = (href) => (e) => {
        // Allow default behavior but also update active state immediately for snappy UI
        setActive(href);
    };

    return (
        <div style={wrapperStyle} role="navigation" aria-label="Primary">
            <div style={barStyle}>
                <ul style={navListStyle}>
                    {links.map(({ href, label }) => {
                        const isActive = active === href;
                        return (
                            <li key={href}>
                                <motion.a
                                    href={href}
                                    onClick={onClickLink(href)}
                                    style={{
                                        ...linkBaseStyle,
                                        ...(isActive ? activeLinkStyle : null),
                                    }}
                                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                                    onFocus={(e) => (e.currentTarget.style.boxShadow = focusRingStyle.boxShadow)}
                                    onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = isActive ? "#000" : "#111")
                                    }
                                >
                                    {label}
                                    {prefersReducedMotion ? (
                                        // Static underline only for active when reduced motion is preferred
                                        isActive && <span style={underlineStyle} />
                                    ) : (
                                        <motion.span
                                            style={underlineStyle}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: isActive ? 1 : 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        />
                                    )}
                                </motion.a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;