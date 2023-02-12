import { Row, Col, Image, Button } from 'react-bootstrap';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './style.css';
import React from 'react';
import { Listing } from '../../Elements/Listing/Listing';

function About() {
    const navigate = useNavigate();
    document.title = "Home - Fredrik Lundström";

    const [githubAcitivity, setGithubActivity] = React.useState([]);
    const [index, setIndex] = React.useState(3);

    React.useEffect(() => {
        fetch('https://api.github.com/users/frlundst/events')
            .then(response => response.json())
            .then(data => setGithubActivity(data));
    }, []);

    return (
        <div className='about-container'>
            <Row>
                <Col>
                    <Image className='about-container-image-mobile' src='/images/user.png' width={275} fluid={true} rounded={true}></Image>
                </Col>
            </Row>
            <Row xs={1} lg={2}>
                <Col>
                    <h1>Hi! I'm Fredrik! Test</h1>
                    <h2>Studying Computer Science at KTH</h2>
                    <p>
                        Currently in my last year of studying BSc Computer Science
                        at Kungliga Tekniska Högskolan (KTH) in Stockholm. I am
                        also working at Nore Technology as a System Developer
                        improving the performance of their financial/insurance-counseling
                        platform by upgrading the UI from ASP.NET to React.js.
                    </p>

                    <Row xs={2} style={{ gap: "10px", margin: "0" }}>
                        <Button style={{ width: "100px" }} onClick={() => navigate("/projects")} >Projects</Button>
                        <Button style={{ width: "140px" }} onClick={() => navigate("/experience")} >Experience</Button>
                    </Row>

                    <h1 style={{ marginTop: "10px" }}>
                        <a href='https://www.linkedin.com/in/fredrik-lundstr%C3%B6m-184575180/' target="_blank" rel="noreferrer"><AiOutlineLinkedin></AiOutlineLinkedin></a>
                        <a href='https://github.com/frlundst' target="_blank" rel="noreferrer"><AiOutlineGithub></AiOutlineGithub></a>
                    </h1>
                </Col>
                <Col>
                    <Image className='about-container-image' src='/images/user.png' width={275} fluid={true} rounded={true}></Image>
                </Col>
                <Col></Col>
            </Row>

            <br />
            <br />
            <br />

            <h2>Recent GitHub Activity</h2>
            <p>Click on the title to go to the repository</p>
            <hr />
            <div>
                {githubAcitivity.slice(0, index).map((activity, index) => {
                    return (
                        <Listing
                            key={activity.id}
                            imagePathname={activity.actor.avatar_url}
                            title={activity.repo.name}
                            time={activity.created_at}
                            type={activity.type}
                        />
                    );
                })}
            </div>

            {index < githubAcitivity.length ? <Button
                onClick={() => setIndex(index + 5)}
                variant="dark"
                style={{ margin: "50px auto", display: "block" }}
            >Show more</Button> : null}
        </div>
    );
}

export default About;