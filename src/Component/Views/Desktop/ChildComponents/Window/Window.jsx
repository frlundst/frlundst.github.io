import { useOutletContext } from "react-router-dom";
import { FiMaximize2, FiMinimize2, FiX } from "react-icons/fi";
import "./style.css";

// A desktop window. `label` names it for screen readers; `title` is what the
// title bar shows and may contain links (e.g. a breadcrumb).
export const Window = ({ label, title, icon, children }) => {
    const { maximized, toggleMaximized, closeWindow } = useOutletContext();

    return (
        <section className="window" aria-label={label}>
            <div className="window-titlebar" onDoubleClick={toggleMaximized}>
                <span className="window-title">
                    <span className="window-title-icon" aria-hidden="true">{icon}</span>
                    {title}
                </span>
                <div className="window-controls">
                    <button
                        type="button"
                        className="window-control window-control-maximize"
                        onClick={toggleMaximized}
                        aria-label={maximized ? "Restore window" : "Maximize window"}
                    >
                        {maximized ? <FiMinimize2 /> : <FiMaximize2 />}
                    </button>
                    <button type="button" className="window-control" onClick={closeWindow} aria-label="Close window">
                        <FiX />
                    </button>
                </div>
            </div>

            <div className="window-body">{children}</div>
        </section>
    );
};
