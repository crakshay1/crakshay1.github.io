import { useEffect, useState } from "react";
import ProjectSlider from "./ProjectSlider";

import "./Projects.css"

const PROJECT_LISTS = [
    {
        id: "bioinfo",
        emoji : "🧬​",
        title: "BIO-INFO PROJECTS - [6]",
        description:
            "This is where I get serious : using the power of scripting to solve Biology problems",
        repositories: [
            "TEnder",
            "GaLLost",
            "BruAnnoPipe",
            "HelixFlor",
            "COPunD",
            "BAQaryote",
        ],
    },
    {
        id: "cs",
        emoji : "🖥️​​",
        title: "CS PROJECTS - [4]",
        description:
        "Well, even as a Bio-Informatician I had to code purely CS projects",
        repositories: [
            "Compil-Acteur",
            "ChromaPath",
            "BrunOOP",
            "TeORCHy",
        ],
    },
    {
        id: "hackathons",
        emoji : "​🕵🏽​​",
        title: "HACKATHONS - [3]",
        description: "Nah I'd win",
        repositories: [
            "RNA-PS",
            "DalguardYES",
            "CardiHack",
        ],
    },

];


export default function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchStarredRepositories() {
        try {
            const response = await fetch(
            `https://api.github.com/users/crakshay1/starred?per_page=100`
            );

            if (!response.ok) {
            throw new Error("Failed to fetch GitHub repositories");
            }
            else {
                console.log("All good masta");
            }

            const data = await response.json();
            setRepositories(data);
            console.log(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        }

        fetchStarredRepositories();
    }, []);

    if (loading) {
        return (
        <section className="projects">
            <p>Loading projects...</p>
        </section>
        );
    }

    if (error) {
        return (
        <section className="projects">
            <p>Unable to load GitHub projects.</p>
        </section>
        );
    }

    return (
        <div className="projects">
        {PROJECT_LISTS.map((list) => {
            const projects = repositories.filter((repo) =>
            list.repositories.includes(repo.name)
            );

            return (
            <ProjectSlider
                key={list.id}
                emoji={list.emoji}
                title={list.title}
                description={list.description}
                projects={projects}
            />
            );
        })}
        </div>
    );
    }