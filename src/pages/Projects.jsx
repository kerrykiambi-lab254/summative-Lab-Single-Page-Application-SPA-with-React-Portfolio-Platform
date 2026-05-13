import { useEffect, useState } from 'react';
import { fetchAllProjects, deleteProject } from '../api/projectsAPI.js';
import ProjectList from '../components/ProjectList.jsx';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllProjects()
      .then((data) => setProjects(data))
      .catch(() => setError('Unable to load projects.'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (projectId) => {
    await deleteProject(projectId);
    setProjects((prev) => prev.filter((project) => project.id !== projectId));
  };

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="page projects-page">
      <h1>All Projects</h1>
      <ProjectList projects={projects} onDelete={handleDelete} />
    </section>
  );
}

export default Projects;
