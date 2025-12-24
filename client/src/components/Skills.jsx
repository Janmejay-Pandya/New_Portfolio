import "../css/Skills.css";

function Skills() {
    const skillGroups = [
        {
            title: "Languages & Core",
            icon: "💻",
            skills: [
                { name: "Python", icon: "🐍" },
                { name: "JavaScript", icon: "🟨" },
                { name: "TypeScript", icon: "🔷" },
                { name: "Java", icon: "☕" },
                { name: "C", icon: "📘" },
                { name: "SQL", icon: "🧾" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            icon: "⚡",
            skills: [
                { name: "React.js", icon: "⚛️" },
                { name: "Node.js", icon: "🌿" },
                { name: "Express.js", icon: "🚏" },
                { name: "Flask", icon: "🧪" },
                { name: "FastAPI", icon: "🚀" }
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: "☁️",
            skills: [
                { name: "AWS", icon: "🟧" },
                { name: "GitHub Actions (CI/CD)", icon: "🔄" },
                { name: "Docker", icon: "🐳" },
                { name: "Postman", icon: "📮" }
            ]
        },
        {
            title: "AI / ML",
            icon: "🧠",
            skills: [
                { name: "Generative AI", icon: "✨" },
                { name: "LangChain", icon: "🧩" },
                { name: "LLMs", icon: "💬" },
                { name: "RAG", icon: "🗂️" },
                { name: "Prompt Engineering", icon: "🎯" },
                { name: "NLP", icon: "🔍" },
                { name: "Scikit-learn", icon: "📐" }
            ]
        },
        {
            title: "Databases",
            icon: "🗄️",
            skills: [
                { name: "MySQL", icon: "🐬" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "MongoDB", icon: "🍃" }
            ]
        }
    ];

    return (
        <section className="skills-section" id="skills">
            <div className="skills-header">
                <p className="eyebrow">Toolbox</p>
                <h1>Skills & Technologies</h1>
                <p className="skills-subtitle">
                    A mix of languages, frameworks, cloud tooling, and AI/ML experience I use to build and ship products end-to-end.
                </p>
            </div>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div className="skill-card" key={group.title}>
                        <div className="skill-card-header">
                            <span className="skill-card-icon" aria-hidden="true">{group.icon}</span>
                            <h3>{group.title}</h3>
                        </div>
                        <div className="skill-chip-wrap">
                            {group.skills.map((skill) => (
                                <span className="skill-chip" key={skill.name}>
                                    <span className="chip-icon" aria-hidden="true">{skill.icon}</span>
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
