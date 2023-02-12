import React from "react";
import { Card, Button, Badge } from 'react-bootstrap';
import "./style.css";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, status, text, id, imagePathname, subtitle }) => {
    const navigate = useNavigate();

    return <Card className='projects-container-card'>
        <Card.Img variant="top" src={imagePathname} />
        <Card.Body>
            <Card.Title>{title} <Badge bg={status === "Done" ? "success" : "secondary"}>{status}</Badge> </Card.Title>
            <Card.Subtitle style={{fontSize: "18px", fontWeight: "bold", marginBottom: "5px"}}>
                - {subtitle}
            </Card.Subtitle>
            <Card.Text>
                {text ? text.substring(0, 125) + "..." : "No description."}
            </Card.Text>
            <Button
                className='projects-container-card-button'
                variant="primary"
                onClick={() => navigate(`/projects/${id}`)}
            >Read more</Button>
        </Card.Body>
    </Card>
}