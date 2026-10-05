export default function ProjectCard({ project }) {
    return (
        <article className="proj">
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}
            className="proj-name"
            >                
                {project.language && (
                    <span className="project-language">
                        <i>{project.language}</i>
                    </span>
                )}
                <h3 className="proj-name">{project.name}</h3>
                <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    View project →
                </a>
            </div>
            <p className="proj-card" style={{fontSize: "1.1vmin"}}>{project.description || "No description available."}</p>
        </article>
    );
}

// Oublie pas le z-index et de modifier proj voilà bisous je te laisse (le mec qui parle à lui même)