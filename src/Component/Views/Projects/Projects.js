import { Row, Button, Form } from 'react-bootstrap';
import React from 'react';
import { ProjectCard } from '../../Elements/ProjectCard/ProjectCard';
import { project_data } from '../../../Data/project_data';

function Projects() {
    document.title = "Projects - Fredrik Lundström";
    const [projects, setProjects] = React.useState(project_data);
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('0');

    React.useEffect(() => {
        if (search !== '') {
            setProjects(project_data.filter((project) => {
                return project.title.toLowerCase().includes(search.toLowerCase()) ||
                    project.subtitle.toLowerCase().includes(search.toLowerCase()) ||
                    project.descriptions.join(' ').toLowerCase().includes(search.toLowerCase());
            }));
        } else if (sort !== '0') {
            setProjects(project_data.filter((project) => {
                return project.status.toLowerCase().includes(sort.toLowerCase());
            }));
        } else {
            setProjects(project_data);
        }
    }, [search, sort]);

    return (
        <div style={{ paddingTop: "50px", minHeight: "90vh" }}>
            <h1>Projects</h1>

            <br />

            <Form style={{ maxWidth: "400px", display: "flex", columnGap: "20px", flexWrap: "nowrap" }}>
                <Form.Select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value='0' disabled >Show by status</option>
                    <option value="done">Done</option>
                    <option value="ongoing">Ongoing</option>
                </Form.Select>
                <Form.Control
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search !== '' || sort !== '0' ?
                    <Button
                        onClick={() => {
                            setSearch('');
                            setSort('0');
                        }}
                    >Clear</Button>
                    : null}
            </Form>

            <br/>
            <br/>

            <Row xs={1} md={projects.length > 0 ? 2 : 1} lg={projects.length > 0 ? 3 : 1} >

                {projects.length > 0 ? projects.map((project) => {
                    return <ProjectCard
                        key={project.id}
                        title={project.title}
                        subtitle={project.subtitle}
                        status={project.status}
                        text={project.descriptions[0]}
                        id={project.id}
                        imagePathname={project.images[0]}
                    />
                }) : <h4 style={{ textAlign: "center" }}> No projects found :( </h4>}

            </Row>
        </div>
    );
}

export default Projects;