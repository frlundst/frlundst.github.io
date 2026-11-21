import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FiBriefcase, FiFolder, FiGithub, FiLinkedin, FiUser } from "react-icons/fi";
import "./style.css";
import { DesktopIcon } from "./ChildComponents/DesktopIcon/DesktopIcon";
import { MenuBar } from "./ChildComponents/MenuBar/MenuBar";
import { Wallpaper } from "./ChildComponents/Wallpaper/Wallpaper";
import { TouchCursor } from "./ChildComponents/TouchCursor/TouchCursor";

export const LINKEDIN_URL = "https://www.linkedin.com/in/fredrik-lundstr%C3%B6m-184575180/";
export const GITHUB_URL = "https://github.com/frlundst";

// The site shell: wallpaper, menu bar and desktop icons. The current route
// renders its page as a <Window> in the middle.
export const Desktop = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [homeClosed, setHomeClosed] = React.useState(false);
    const [maximized, setMaximized] = React.useState(false);

    React.useEffect(() => {
        if (pathname !== "/") {
            setHomeClosed(false);
        }
    }, [pathname]);

    const openHome = () => setHomeClosed(false);
    const toggleMaximized = () => setMaximized(value => !value);
    const closeWindow = () => {
        setMaximized(false);
        setHomeClosed(true);
        if (pathname !== "/") {
            navigate("/");
        }
    };

    const showWindow = !(pathname === "/" && homeClosed);
    const section = pathname.split("/")[1];

    return (
        <div className="desktop">
            <Wallpaper />
            <MenuBar onHome={openHome} />

            <main className={`desktop-area${maximized ? " is-maximized" : ""}`}>
                <nav className="desktop-icons desktop-icons-left" aria-label="Pages">
                    <DesktopIcon
                        icon={<FiUser />}
                        label="About me"
                        to="/"
                        onClick={openHome}
                        active={section === "" && showWindow}
                        color="linear-gradient(145deg, #2cc5b3, #0f766e)"
                    />
                    <DesktopIcon
                        icon={<FiBriefcase />}
                        label="Experience"
                        to="/experience"
                        active={section === "experience"}
                        color="linear-gradient(145deg, #f6b84b, #d9770a)"
                    />
                    <DesktopIcon
                        icon={<FiFolder />}
                        label="Projects"
                        to="/projects"
                        active={section === "projects"}
                        color="linear-gradient(145deg, #8b93fa, #4f46e5)"
                    />
                </nav>

                {showWindow && <Outlet context={{ maximized, toggleMaximized, closeWindow }} />}

                <nav className="desktop-icons desktop-icons-right" aria-label="Elsewhere">
                    <DesktopIcon icon={<FiGithub />} label="GitHub" href={GITHUB_URL} color="linear-gradient(145deg, #454c54, #16191d)" />
                    <DesktopIcon icon={<FiLinkedin />} label="LinkedIn" href={LINKEDIN_URL} color="linear-gradient(145deg, #3d93df, #0a66c2)" />
                </nav>
            </main>

            <TouchCursor />
        </div>
    );
};
