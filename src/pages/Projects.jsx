import { useEffect, useState } from 'react';
import { fetchAllProjects } from '../api/projectsAPI.js';
import ProjectList from '../components/ProjectList.jsx';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllProjects()
      .then((data) => setProjects(data))
      .catch(() => setError('Unable to load projects from GitHub.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="page projects-page">
      <h1>GitHub Projects</h1>
      <ProjectList projects={projects} />
    </section>
  );
}

export default Projects;
