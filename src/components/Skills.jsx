const skills = [
  { name: "HTML", desc: "Semantic, accessible page structure." },
  { name: "CSS", desc: "Responsive layouts with Flexbox and Grid." },
  { name: "JavaScript", desc: "Interactive features and DOM logic (ES6+)." },
  { name: "React", desc: "Reusable components, props, and state." },
  { name: "Git & GitHub", desc: "Version control and collaboration." },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;