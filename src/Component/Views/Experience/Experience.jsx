import { Col, Row, Image } from "react-bootstrap";
import "./style.css";

export const Experience = () => {
    document.title = "Experience - Fredrik Lundström";
    return (
        <div className="education-container">
            <h1>Experience</h1>
            
            <Row xs={1} lg={1}>
                <Col className="experience-card">
                    <Image
                        className="education-container-image"
                        style={{marginBottom: "0"}}
                        src="https://media.licdn.com/dms/image/v2/C560BAQHjKio35r4igg/company-logo_200_200/company-logo_200_200/0/1630624816459/nore_technology_ab_logo?e=1779926400&v=beta&t=wSCcus_0MbUHKdIYrPJLkXZUv264jDgi6vjLmxqZUmc"
                        fluid
                        width={100}
                        rounded
                    />
                    <p>JUNE 2022 - AUG 2026</p>
                    <h4>
                        <strong>.NET & React Developer</strong>
                    </h4>
                    <div>@ Nore Technology</div>
                </Col>
            </Row>

            <br/>
            
            <hr/>

            <br/>
            
            <h1>Education</h1>
            
            <br/>
            
            <br/>
            
            <Row xs={1} lg={4}>
                <Col>

                </Col>
                <Col className="experience-card">
                    <Image
                        className="education-container-image"
                        src="https://upload.wikimedia.org/wikipedia/en/e/e0/KTH_Royal_Institute_of_Technology_logo.svg"
                        fluid
                        width={100}
                        rounded
                    />
                    <p>AUG 2020 - MAY 2023</p>
                    <h4>
                        <strong>Computer Science Bachelor of Engineering</strong>
                    </h4>
                    <div>@ KTH Kista</div>
                    <br/>
                    <br/>
                </Col>
                <Col className="experience-card">
                    <Image
                        className="education-container-image"
                        src="https://yt3.ggpht.com/ytc/AKedOLRKR_-qlMZMy2Pl8d0jA5vweyPlc-8JweGTyUMUqw=s900-c-k-c0x00ffffff-no-rj"
                        fluid
                        width={100}
                        rounded
                    />
                    <p>AUG 2016 - JUN 2019</p>
                    <h4>
                        <strong>Information and Media Technology</strong>
                    </h4>
                    <div>@ MEDIAGYMNASIET NACKA</div>
                </Col>
                <Col>

                </Col>
            </Row>
        </div>
    );
}