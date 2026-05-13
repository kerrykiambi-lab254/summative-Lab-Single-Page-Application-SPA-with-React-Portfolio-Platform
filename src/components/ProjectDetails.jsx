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
      .catch(() => setError('Project not found.'));
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
        <Link to={`/projects/${project.id}/edit`} className="button">Edit Project</Link>
      </div>
    </section>
  );
}

export default ProjectDetails;
