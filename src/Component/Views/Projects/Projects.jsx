import React from 'react';
import { FiFolder, FiSearch } from 'react-icons/fi';
import './style.css';
import { ProjectCard } from './ChildComponents/ProjectCard/ProjectCard';
import { Window } from '../Desktop/ChildComponents/Window/Window';
import { project_data } from '../../../Data/project_data';

const STATUS_FILTERS = [
    { value: 'all', label: 'All' },
    { value: 'Done', label: 'Done' },
    { value: 'Ongoing', label: 'Ongoing' },
];

const searchableText = (project) => [
    project.title,
    project.subtitle,
    ...project.descriptions,
    ...project.technologies.map(technology => technology.name),
].join(' ').toLowerCase();

function Projects() {
    document.title = "Projects - Fredrik Lundström";

    const [search, setSearch] = React.useState('');
    const [status, setStatus] = React.useState('all');

    const query = search.trim().toLowerCase();
    const projects = project_data.filter(project =>
        (status === 'all' || project.status === status) &&
        (query === '' || searchableText(project).includes(query))
    );

    const clearFilters = () => {
        setSearch('');
        setStatus('all');
    };

    return (
        <Window label="Projects" title="Projects" icon={<FiFolder />}>
            <header className="page-header">
                <h1 className="page-title">Projects</h1>
                <p className="page-lead">A selection of things I've built.</p>
            </header>

            <div className="projects-toolbar">
                <div className="segmented" role="group" aria-label="Filter by status">
                    {STATUS_FILTERS.map(filter => (
                        <button
                            key={filter.value}
                            type="button"
                            aria-pressed={status === filter.value}
                            onClick={() => setStatus(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <label className="projects-search">
                    <FiSearch aria-hidden="true" />
                    <input
                        type="search"
                        placeholder="Search projects"
                        aria-label="Search projects"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>

                <span className="projects-count">
                    {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                </span>
            </div>

            {projects.length > 0 ? (
                <div className="projects-grid">
                    {projects.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
            ) : (
                <div className="projects-empty">
                    <p>No projects match your filters.</p>
                    <button type="button" className="btn-desktop btn-desktop-secondary" onClick={clearFilters}>
                        Clear filters
                    </button>
                </div>
            )}
        </Window>
    );
}

export default Projects;
