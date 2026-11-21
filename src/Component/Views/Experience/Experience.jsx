import { FiBriefcase } from "react-icons/fi";
import "./style.css";
import { Window } from "../Desktop/ChildComponents/Window/Window";

const WORK = [
    {
        mark: "PP",
        tile: "linear-gradient(145deg, #3b82f6, #1d4ed8)",
        role: ".NET Developer & Domain Specialist",
        org: "Projektportalen",
        period: "Aug 2026 – Present",
        current: true,
        description:
            "Focusing primarily on AI-driven development and building intelligent solutions that simplify project management and streamline workflows for the construction and installation industries.",
    },
    {
        mark: "N",
        tile: "linear-gradient(145deg, #4b5259, #16191d)",
        role: ".NET & React Developer",
        org: "Nore Technology",
        period: "Jun 2022 – Aug 2026",
        description:
            "Worked on a digital financial advisory platform for Söderberg & Partners in the UK fintech sector.",
    },
];

const EDUCATION = [
    {
        mark: "KTH",
        tile: "linear-gradient(145deg, #3b7ad9, #1954a6)",
        role: "Bachelor of Engineering in Computer Science",
        org: "KTH Royal Institute of Technology · Kista",
        period: "Aug 2020 – May 2023",
    },
    {
        mark: "M",
        tile: "linear-gradient(145deg, #f97316, #c2410c)",
        role: "Information and Media Technology",
        org: "Mediagymnasiet Nacka",
        period: "Aug 2016 – Jun 2019",
    },
];

const TimelineItem = ({ mark, tile, role, org, period, current, description }) => (
    <li className="timeline-item">
        <span className="timeline-logo" style={{ "--tile": tile }} aria-hidden="true">{mark}</span>
        <div>
            <div className="timeline-meta">
                <span>{period}</span>
                {current && <span className="timeline-current">Current</span>}
            </div>
            <h3 className="timeline-role">{role}</h3>
            <p className="timeline-org">{org}</p>
            {description && <p className="timeline-description">{description}</p>}
        </div>
    </li>
);

export const Experience = () => {
    document.title = "Experience - Fredrik Lundström";

    return (
        <Window label="Experience" title="Experience" icon={<FiBriefcase />}>
            <div className="experience">
                <header className="page-header">
                    <h1 className="page-title">Experience</h1>
                    <p className="page-lead">Where I've worked and studied.</p>
                </header>

                <section className="timeline-section" aria-labelledby="work-heading">
                    <h2 id="work-heading" className="section-title">Work</h2>
                    <ul className="timeline">
                        {WORK.map(item => <TimelineItem key={item.org} {...item} />)}
                    </ul>
                </section>

                <section className="timeline-section" aria-labelledby="education-heading">
                    <h2 id="education-heading" className="section-title">Education</h2>
                    <ul className="timeline">
                        {EDUCATION.map(item => <TimelineItem key={item.org} {...item} />)}
                    </ul>
                </section>
            </div>
        </Window>
    );
};
