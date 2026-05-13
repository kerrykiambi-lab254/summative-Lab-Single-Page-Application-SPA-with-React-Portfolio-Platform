import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm.jsx';
import { fetchProjectById, updateProject } from '../api/projectsAPI.js';

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjectById(id)
      .then((data) => setProject({ ...data, tags: data.tags.join(', ') }))
      .catch(() => setError('Project not found.'));
  }, [id]);

  const handleSubmit = async (updatedProject) => {
    await updateProject(id, updatedProject);
    navigate(`/projects/${id}`);
  };

  if (error) return <p className="error">{error}</p>;
  if (!project) return <p>Loading project...</p>;

  return (
    <section className="page edit-page">
      <h1>Edit Project</h1>
      <ProjectForm initialState={project} onSubmit={handleSubmit} />
    </section>
  );
}

export default EditProject;
