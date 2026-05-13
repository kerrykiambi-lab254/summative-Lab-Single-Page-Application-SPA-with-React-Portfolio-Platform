import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm.jsx';
import { createProject } from '../api/projectsAPI.js';

function AddProject() {
  const navigate = useNavigate();

  const handleSubmit = async (project) => {
    await createProject(project);
    navigate('/projects');
  };

  return (
    <section className="page add-page">
      <h1>Add Project</h1>
      <ProjectForm initialState={{ title: '', description: '', tags: '', imageUrl: '' }} onSubmit={handleSubmit} />
    </section>
  );
}

export default AddProject;
