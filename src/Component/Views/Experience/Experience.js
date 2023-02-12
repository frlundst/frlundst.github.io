import { Col, Row, Image } from "react-bootstrap";
import "./style.css";

export const Experience = () => {
    document.title = "Experience - Fredrik Lundström";
    return (
        <div className="education-container">
            <h1>Experience</h1>

            <h2>Education</h2>
            <br/>
            <br/>
            <Row xs={1} lg={4}>
                <Col>

                </Col>
                <Col>
                    <Image
                        className="education-container-image"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/KTH_Royal_Institute_of_Technology_logo.svg/800px-KTH_Royal_Institute_of_Technology_logo.svg.png"
                        fluid
                        width={100}
                        rounded
                    />
                    <p>AUG 2020 - MAY 2023</p>
                    <h4>
                        Computer Science 180hp
                    </h4>
                    <strong>KTH Kista</strong>
                    <br/>
                    <br/>
                </Col>
                <Col>
                    <Image
                        className="education-container-image"
                        src="https://yt3.ggpht.com/ytc/AKedOLRKR_-qlMZMy2Pl8d0jA5vweyPlc-8JweGTyUMUqw=s900-c-k-c0x00ffffff-no-rj"
                        fluid
                        width={100}
                        rounded
                    />
                    <p>AUG 2016 - JUN 2019</p>
                    <h4>
                        Information and Media Technology
                    </h4>
                    <strong>MEDIAGYMNASIET NACKA</strong>
                </Col>
                <Col>

                </Col>
            </Row>
        </div>
    );
}