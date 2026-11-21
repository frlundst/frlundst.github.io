import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin, FiUser } from 'react-icons/fi';
import './style.css';
import { Listing } from './ChildComponents/Listing/Listing';
import { Window } from '../Desktop/ChildComponents/Window/Window';
import { GITHUB_URL, LINKEDIN_URL } from '../Desktop/Desktop';

const ACTIVITY_PAGE_SIZE = 5;

function About() {
    document.title = "Home - Fredrik Lundström";

    const [githubActivity, setGithubActivity] = React.useState(null);
    const [activityError, setActivityError] = React.useState(false);
    const [visibleCount, setVisibleCount] = React.useState(ACTIVITY_PAGE_SIZE);

    React.useEffect(() => {
        fetch('https://api.github.com/users/frlundst/events')
            .then(response => response.json())
            .then(data => {
                // When rate limited, GitHub answers with an error object instead of a list.
                if (Array.isArray(data)) {
                    setGithubActivity(data);
                } else {
                    setActivityError(true);
                }
            })
            .catch(() => setActivityError(true));
    }, []);

    return (
        <Window label="About me" title="About me" icon={<FiUser />}>
            <div className="hero">
                <div className="hero-text">
                    <h1 className="hero-title">Hi! I'm Fredrik!</h1>
                    <h2 className="hero-subtitle">.NET & React Developer and Computer Science Engineer</h2>
                    <p>
                        I'm a full-stack developer specializing in .NET and React, with a passion for software engineering, AI, and technology.
                    </p>
                    <p>
                        I hold a Bachelor of Engineering in Computer Science from KTH Royal Institute of Technology and have experience
                        developing software in the fintech sector.
                    </p>
                    <p>
                        Currently, I'm working as a .NET Developer & Domain Specialist at Projektportalen, focusing primarily on AI-driven
                        development and building intelligent solutions that simplify project management and streamline workflows for the
                        construction and installation industries.
                    </p>

                    <div className="hero-actions">
                        <Link to="/projects" className="btn-desktop btn-desktop-primary">
                            Projects <FiArrowRight aria-hidden="true" />
                        </Link>
                        <Link to="/experience" className="btn-desktop btn-desktop-secondary">Experience</Link>
                        <span className="hero-socials">
                            <a className="hero-social" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FiLinkedin />
                            </a>
                            <a className="hero-social" href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FiGithub />
                            </a>
                        </span>
                    </div>
                </div>

                <figure className="hero-photo">
                    <img src="/resources/user.png" alt="Fredrik Lundström" />
                </figure>
            </div>

            <section className="activity" aria-labelledby="activity-heading">
                <div className="activity-header">
                    <h3 id="activity-heading">Recent GitHub activity</h3>
                    <a className="activity-link" href={GITHUB_URL} target="_blank" rel="noreferrer">
                        View profile <FiArrowUpRight aria-hidden="true" />
                    </a>
                </div>

                {activityError ? (
                    <p className="activity-empty">Couldn't load GitHub activity right now.</p>
                ) : githubActivity === null ? (
                    <p className="activity-empty">Loading…</p>
                ) : githubActivity.length === 0 ? (
                    <p className="activity-empty">No recent public activity.</p>
                ) : (
                    <ul className="activity-list">
                        {githubActivity.slice(0, visibleCount).map(activity => (
                            <Listing
                                key={activity.id}
                                title={activity.repo.name}
                                time={activity.created_at}
                                type={activity.type}
                            />
                        ))}
                    </ul>
                )}

                {githubActivity && visibleCount < githubActivity.length && (
                    <div className="activity-more">
                        <button
                            type="button"
                            className="btn-desktop btn-desktop-secondary"
                            onClick={() => setVisibleCount(count => count + ACTIVITY_PAGE_SIZE)}
                        >
                            Show more
                        </button>
                    </div>
                )}
            </section>
        </Window>
    );
}

export default About;
