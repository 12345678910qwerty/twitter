import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./HomeLink.module.css";

export default function HomeLink() {
    const [homeLinkHover, setHomeLinkHover] = useState(false);

    const handleMouseEnter = () => {
        setHomeLinkHover(true);
    };

    const handleMouseLeave = () => {
        setHomeLinkHover(false);
    };

    const imgSrc = homeLinkHover ? "images/home-blue.svg" : "images/home-black.svg";
    const textColor = homeLinkHover ? "#1DA1F2" : "black";

    return (
        <Link
            className={style.navbar_link}
            to="/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imgSrc} alt="home-link" />
            <p style={{ color: textColor }}>Home</p>
        </Link>
    );
}
