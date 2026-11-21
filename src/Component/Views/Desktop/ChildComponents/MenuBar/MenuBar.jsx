import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const formatNow = () => {
    const now = new Date();
    const date = now.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    return `${date}  ${time}`;
};

export const MenuBar = ({ onHome }) => {
    const [now, setNow] = React.useState(formatNow);

    React.useEffect(() => {
        const id = setInterval(() => setNow(formatNow()), 15000);
        return () => clearInterval(id);
    }, []);

    return (
        <header className="menu-bar">
            <Link className="menu-bar-brand" to="/" onClick={onHome}>
                <span className="menu-bar-dot" aria-hidden="true" />
                Fredrik Lundström
            </Link>
            <span className="menu-bar-clock">{now}</span>
        </header>
    );
};
