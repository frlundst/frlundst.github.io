import { useNavigate, useParams } from "react-router-dom"
import { project_data } from "../../../Data/project_data";
import { Image, Badge, Row, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineHome } from "react-icons/ai";
import React from "react";

export const Project = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const project = project_data.find((project) => project.id === id);
    return (
        <div style={{ padding: "25px 0px", minHeight: "90vh" }}>

            <Button
                onClick={() => navigate("/projects")}
                style={{ marginBottom: "25px" }}
            > ← Go back</Button>

            <h1>{project.title}</h1>

            <h5>- {project.subtitle}</h5>

            <Row xs={2} style={{ width: "100px" }}>

                {project.website ? <h1>
                    <OverlayTrigger overlay={<Tooltip>Website</Tooltip>}>
                        <a href={project.website} target="_blank" rel="noreferrer"><AiOutlineHome></AiOutlineHome></a>
                    </OverlayTrigger>
                </h1> : null}

                {project.github ? <h1>
                    <OverlayTrigger overlay={<Tooltip>Github</Tooltip>}>
                        <a href={project.github} target="_blank" rel="noreferrer"><AiOutlineGithub></AiOutlineGithub></a>
                    </OverlayTrigger>
                </h1> : null}

            </Row>

            {project.technologies.map((technology) => {
                return <Badge key={'projectview' + technology.name} bg={technology.bg}>{technology.name}</Badge>
            })}

            <h5 style={{ fontWeight: "bold", marginTop: "10px" }}>
                {project.descriptions[0] ?? "No description."}
            </h5>

            {project.descriptions.length > 1 ? <br /> : null}
            {project.descriptions.length > 1 ? project.descriptions.slice(1).map((description, index) => {
                return <div key={description + index}>
                    <h6>{description}</h6>
                </div>
            }) : null}

            <hr />

            <h2>Gallery</h2>

            <Row xs={2} style={{rowGap: "20px"}}>
                {project.images.length > 0 ? project.images.map((image) => {
                    return <Image key={'projectview' + image} fluid src={image}></Image>
                })
                    : null}
            </Row>
        </div >
    );
}