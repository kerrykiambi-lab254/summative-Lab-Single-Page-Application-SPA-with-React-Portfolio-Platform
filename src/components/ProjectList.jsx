import ProjectCard from './ProjectCard.jsx';

function ProjectList({ projects, onDelete }) {
  if (!projects.length) {
    return <p className="empty-state">No projects available.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProjectList;
