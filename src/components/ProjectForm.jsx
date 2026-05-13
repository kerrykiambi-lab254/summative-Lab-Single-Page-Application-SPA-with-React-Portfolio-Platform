import { useState } from 'react';

function ProjectForm({ initialState, onSubmit }) {
  const [project, setProject] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tags = project.tags.split(',').map((tag) => tag.trim()).filter(Boolean);
    onSubmit({ ...project, tags });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input name="title" value={project.title} onChange={handleChange} required />
      </label>
      <label>
        Description
        <textarea name="description" value={project.description} onChange={handleChange} required />
      </label>
      <label>
        Tags (comma separated)
        <input name="tags" value={project.tags} onChange={handleChange} />
      </label>
      <label>
        Image URL
        <input name="imageUrl" value={project.imageUrl} onChange={handleChange} />
      </label>
      <button type="submit">Save Project</button>
    </form>
  );
}

export default ProjectForm;
