import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProjectById } from '../api/projectsAPI.js';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjectById(id)
      .then(setProject)
      .catch(() => setError('Project not found on GitHub.'));
  }, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!project) {
    return <p>Loading project...</p>;
  }

  return (
    <section className="project-detail">
      <img src={project.imageUrl} alt={project.title} />
      <div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <p><strong>Created:</strong> {new Date(project.created_at).toLocaleDateString()}</p>
        <p><strong>Last Updated:</strong> {new Date(project.updated_at).toLocaleDateString()}</p>
        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="button">View on GitHub</a>
        <Link to="/projects" className="button secondary">Back to Projects</Link>
      </div>
    </section>
  );
}

export default ProjectDetails;
