import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="project-card">
            <div className="project-card-body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {expanded && (
                    <p className="project-long-desc">
                        {project.longDesc}
                    </p>
                )}

                <div className="project-tags">
                    {project.tech.map((t, index) => (
                        <span key={index} className="tag">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="project-buttons">
                    {project.disabled ? (
                        <button className="btn btn-primary" disabled>
                            Coming Soon
                        </button>
                    ) : (
                        <>
                            <button
                                className={expanded ? "btn btn-secondary" : "btn btn-primary"}
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? "Hide Details" : "View Project"}
                            </button>

                            {expanded && (
                                <button
                                    className="btn btn-primary"
                                    onClick={() => window.open(project.githubUrl, "_blank")}
                                >
                                    GitHub
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;