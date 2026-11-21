import { Link } from "react-router-dom";
import { FiFolder } from "react-icons/fi";
import "./style.css";
import { StatusPill, TechTag } from "../Tags/Tags";

const MAX_TAGS = 3;

export const ProjectCard = ({ project }) => {
    const { id, title, subtitle, status, images, technologies } = project;
    const hiddenTags = technologies.length - MAX_TAGS;

    return (
        <Link to={`/projects/${id}`} className="project-card">
            <div className="project-card-thumb">
                {images[0] ? (
                    <img src={images[0]} alt="" loading="lazy" />
                ) : (
                    <div className="project-card-placeholder"><FiFolder aria-hidden="true" /></div>
                )}
            </div>
            <div className="project-card-body">
                <div className="project-card-head">
                    <h2 className="project-card-title">{title}</h2>
                    <StatusPill status={status} />
                </div>
                <p className="project-card-subtitle">{subtitle}</p>
                <div className="project-card-tags">
                    {technologies.slice(0, MAX_TAGS).map(technology => (
                        <TechTag key={technology.name} name={technology.name} bg={technology.bg} />
                    ))}
                    {hiddenTags > 0 && <span className="tech-tag">+{hiddenTags}</span>}
                </div>
            </div>
        </Link>
    );
};
