import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiChevronRight, FiFolder, FiGithub } from "react-icons/fi";
import "./style.css";
import { project_data } from "../../../Data/project_data";
import { Window } from "../Desktop/ChildComponents/Window/Window";
import { StatusPill, TechTag } from "../Projects/ChildComponents/Tags/Tags";

export const Project = () => {
    const { id } = useParams();
    const project = project_data.find((project) => project.id === id);
    const name = project ? project.title : "Not found";

    document.title = `${project ? project.title : "Project not found"} - Fredrik Lundström`;

    const breadcrumb = (
        <span className="window-breadcrumb">
            <Link to="/projects">Projects</Link>
            <FiChevronRight aria-hidden="true" />
            <span>{name}</span>
        </span>
    );

    if (!project) {
        return (
            <Window key="missing" label="Project not found" title={breadcrumb} icon={<FiFolder />}>
                <header className="page-header">
                    <h1 className="page-title">Project not found</h1>
                    <p className="page-lead">There's no project with that name.</p>
                </header>
                <Link to="/projects" className="btn-desktop btn-desktop-secondary">
                    <FiArrowLeft aria-hidden="true" /> All projects
                </Link>
            </Window>
        );
    }

    const { title, subtitle, status, website, github, technologies, descriptions, images } = project;

    return (
        <Window key={id} label={title} title={breadcrumb} icon={<FiFolder />}>
            <Link to="/projects" className="project-back">
                <FiArrowLeft aria-hidden="true" /> All projects
            </Link>

            <header className="page-header">
                <div className="project-title-row">
                    <h1 className="page-title">{title}</h1>
                    <StatusPill status={status} />
                </div>
                <p className="page-lead">{subtitle}</p>

                {(website || github) && (
                    <div className="project-actions">
                        {website && (
                            <a className="btn-desktop btn-desktop-primary" href={website} target="_blank" rel="noreferrer">
                                Visit website <FiArrowUpRight aria-hidden="true" />
                            </a>
                        )}
                        {github && (
                            <a className="btn-desktop btn-desktop-secondary" href={github} target="_blank" rel="noreferrer">
                                <FiGithub aria-hidden="true" /> View on GitHub
                            </a>
                        )}
                    </div>
                )}

                <div className="project-tags">
                    {technologies.map(technology => (
                        <TechTag key={technology.name} name={technology.name} bg={technology.bg} />
                    ))}
                </div>
            </header>

            {descriptions.length > 0 && (
                <div className="project-description">
                    {descriptions.map((description, index) => <p key={index}>{description}</p>)}
                </div>
            )}

            {images.length > 0 && (
                <section className="project-gallery" aria-labelledby="gallery-heading">
                    <h2 id="gallery-heading" className="section-title">Gallery</h2>
                    <div className="project-gallery-grid">
                        {images.map((image, index) => (
                            <a key={image} href={image} target="_blank" rel="noreferrer">
                                <img src={image} alt={`${title} screenshot ${index + 1}`} loading="lazy" />
                            </a>
                        ))}
                    </div>
                </section>
            )}
        </Window>
    );
};
