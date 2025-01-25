import Project from "./Project";
import '../styles/Portfolio.css';
import projectOneImage from "../assets/projectOne.jpg";
import projectTwoImage from "../assets/fantasyFighter.jpg";

export default function Portfolio() {
  const projects = [
    {
      title: "Organizability",
      image: projectOneImage,
      deployedLink: "https://samvs-tech.github.io/Organizability/",
      repoLink: "https://github.com/samvs-tech/Organizability",
    },
    {
      title: "Project 2",
      image: projectTwoImage,
      deployedLink: "https://project-2-c43n.onrender.com/",
      repoLink: "https://github.com/MagicInUse/Fantasy-Fighter",
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
