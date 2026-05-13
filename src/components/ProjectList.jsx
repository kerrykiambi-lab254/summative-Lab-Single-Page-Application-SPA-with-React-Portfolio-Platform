import ProjectCard from './ProjectCard.jsx';

function ProjectList({ projects }) {
  if (!projects.length) {
    return <p className="empty-state">No projects available.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
