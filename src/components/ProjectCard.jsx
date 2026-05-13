import { Link } from 'react-router-dom';

function ProjectCard({ project, onDelete }) {
  return (
    <article className="card">
      <img src={project.imageUrl} alt={project.title} />
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="actions">
          <Link to={`/projects/${project.id}`}>View</Link>
          <button type="button" onClick={() => onDelete(project.id)}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
