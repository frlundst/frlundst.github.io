import "./style.css";

// Dot colours per technology family (the `bg` key in project_data).
const TECH_COLORS = {
    JAVA: "#e3342f",
    REACT: "#00b8d9",
    PHP: "#4f5d95",
    ELIXIR: "#9473e6",
    C: "#555555",
    PYTHON: "#3572a5",
    SQL: "#ff8c00",
    FIREBASE: "#ffb300",
};

export const TechTag = ({ name, bg }) => (
    <span className="tech-tag">
        <span className="tech-tag-dot" style={{ "--dot": TECH_COLORS[bg] || "#9aa8ae" }} aria-hidden="true" />
        {name}
    </span>
);

export const StatusPill = ({ status }) => (
    <span className={`status-pill ${status === "Done" ? "is-done" : "is-ongoing"}`}>{status}</span>
);
