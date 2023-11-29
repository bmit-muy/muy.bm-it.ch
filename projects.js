import ProjectInfoCard from "../components/ProjectInfoCard";
import projectOneImg from "../components/img/projectOne.jpg"

const Projects = () => {
    return (
        <div>
<ProjectInfoCard
  title="Firefox Extension"
  description="A small Browser Extension for Firefox"
  technologies="Jason, JavaScript; HTML"
  githubLink="/home"
  imageUrl={projectOneImg} // Provide the actual image URL or leave it empty
/>

<ProjectInfoCard
  title="Placeholder"
  description="Placeholder"
  technologies="Jason, JavaScript; HTML"
  githubLink="/home"
/>

</div>
);
}

export default Projects;