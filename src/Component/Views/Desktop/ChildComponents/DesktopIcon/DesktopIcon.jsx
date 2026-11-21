import { Link } from "react-router-dom";
import "./style.css";

// An app-style icon on the desktop. Pass `to` for a page on the site or
// `href` for an external link (opens in a new tab). `active` marks the icon
// whose window is currently open.
export const DesktopIcon = ({ icon, label, to, href, onClick, color, active }) => {
    const content = (
        <>
            <span className="desktop-icon-tile" style={{ "--tile": color }} aria-hidden="true">{icon}</span>
            <span className="desktop-icon-label">{label}</span>
        </>
    );

    if (href) {
        return <a className="desktop-icon" href={href} target="_blank" rel="noreferrer">{content}</a>;
    }

    return (
        <Link
            className={`desktop-icon${active ? " is-active" : ""}`}
            to={to}
            onClick={onClick}
            aria-current={active ? "page" : undefined}
        >
            {content}
        </Link>
    );
};
