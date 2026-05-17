import { useMemo, useState } from 'react'
import './App.css'

const initialProjects = [
  {
    id: 1,
    title: 'Solaris E-Commerce',
    description: 'An e-commerce platform for solar products.',
  },
  {
    id: 2,
    title: 'Nebula Analytics',
    description: 'Analytics dashboard for observational data and insights.',
  },
]

function App() {
  const adjectives = ['Creative','Brilliant','Innovative','Dynamic','Sleek','Vibrant','Radiant','Clever','Bold','Nova'];
  const [projects, setProjects] = useState(() =>
    initialProjects.map((p) => ({
      ...p,
      adjective: adjectives[Math.floor(Math.random() * adjectives.length)],
    }))
  );
  const [query, setQuery] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return projects
    return projects.filter((project) =>
      project.title.toLowerCase().includes(normalized) ||
      project.description.toLowerCase().includes(normalized)
    )
  }, [projects, query])

  const handleAddProject = (event) => {
    event.preventDefault()
    if (!title.trim() || !description.trim()) return

    const nextProject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      adjective: adjectives[Math.floor(Math.random() * adjectives.length)],
    }

    setProjects((current) => [nextProject, ...current])
    setTitle('')
    setDescription('')
  }

  const handleDelete = (id) => {
    setProjects((current) => current.filter((project) => project.id !== id))
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Portfolio Showcase</p>
          <h1>Creative Personal Project Showcase</h1>
          <p className="subtitle">
            Explore recent work, add new ideas, and filter the project list.
          </p>
        </div>
        <a
          href="https://github.com/kerrykiambi-lab254"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          View on GitHub
        </a>
      </header>

      <section className="controls-section">
        <label htmlFor="search" className="label">
          Search projects
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search projects"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="search-input"
        />
      </section>

      <section className="project-form-section">
        <h2>Add a new project</h2>
        <form onSubmit={handleAddProject} className="project-form">
          <label htmlFor="title">Project Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="text-input"
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="text-area"
            rows={4}
          />

          <button type="submit" className="submit-button">
            Add Project
          </button>
        </form>
      </section>

      <section className="projects-section">
        <h2>Project list</h2>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div>
                <p className="project-badge">Featured</p>
                <h3>{project.adjective} {project.title}</h3>
                <p>{project.description}</p>
              </div>
              <button
                type="button"
                aria-label="Delete project"
                className="delete-button"
                onClick={() => handleDelete(project.id)}
              >
                Delete
              </button>
            </article>
          ))}
          {filteredProjects.length === 0 && (
            <p className="empty-state">No projects matched your search.</p>
          )}
        </div>
      </section>

      <footer className="app-footer">
        <p>&copy; 2026 KerryLifestyle Corporation. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
