import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
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
          <Link to={`/projects/${project.id}`}>View Details</Link>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="button">View on GitHub</a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
