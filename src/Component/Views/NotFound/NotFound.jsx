import { Link } from "react-router-dom";
import { FiCompass } from "react-icons/fi";
import { Window } from "../Desktop/ChildComponents/Window/Window";

export const NotFound = () => {
    document.title = "Not found - Fredrik Lundström";

    return (
        <Window label="Page not found" title="Not found" icon={<FiCompass />}>
            <header className="page-header">
                <h1 className="page-title">404 – Page not found</h1>
                <p className="page-lead">The page you're looking for doesn't exist.</p>
            </header>
            <Link to="/" className="btn-desktop btn-desktop-primary">Back to the desktop</Link>
        </Window>
    );
};
