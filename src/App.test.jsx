import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
  test('renders the app header with title', () => {
    render(<App />)
    expect(screen.getByText(/lifestyle of kerry's projects/i)).toBeInTheDocument()
  })

  test('renders the subtitle', () => {
    render(<App />)
    expect(screen.getByText(/Explore recent work, add new ideas, and filter the project list/i)).toBeInTheDocument()
  })

  test('renders initial projects', () => {
    render(<App />)
    expect(screen.getByText('cat cafe project')).toBeInTheDocument()
    expect(screen.getByText('personal website project')).toBeInTheDocument()
  })

  test('renders project descriptions', () => {
    render(<App />)
    expect(screen.getByText(/A cozy Solaris cat cafe app/i)).toBeInTheDocument()
    expect(screen.getByText(/A personal portfolio site/i)).toBeInTheDocument()
  })

  test('filters projects based on search query', async () => {
    render(<App />)
    const searchInput = screen.getByPlaceholderText('Search projects')
    
    await userEvent.type(searchInput, 'cat')
    
    expect(screen.getByText('cat cafe project')).toBeInTheDocument()
    expect(screen.queryByText('personal website project')).not.toBeInTheDocument()
  })

  test('filters projects by description', async () => {
    render(<App />)
    const searchInput = screen.getByPlaceholderText('Search projects')
    
    await userEvent.type(searchInput, 'portfolio')
    
    expect(screen.getByText('personal website project')).toBeInTheDocument()
    expect(screen.queryByText('cat cafe project')).not.toBeInTheDocument()
  })

  test('clears filter to show all projects', async () => {
    render(<App />)
    const searchInput = screen.getByPlaceholderText('Search projects')
    
    await userEvent.type(searchInput, 'cat')
    expect(screen.queryByText('personal website project')).not.toBeInTheDocument()
    
    await userEvent.clear(searchInput)
    
    expect(screen.getByText('cat cafe project')).toBeInTheDocument()
    expect(screen.getByText('personal website project')).toBeInTheDocument()
  })

  test('adds a new project', async () => {
    render(<App />)
    const titleInput = screen.getByLabelText('Project Title')
    const descriptionInput = screen.getByLabelText('Description')
    const submitButton = screen.getByText('Add Project')
    
    await userEvent.type(titleInput, 'New Project')
    await userEvent.type(descriptionInput, 'A new project description')
    fireEvent.click(submitButton)
    
    expect(screen.getByText('New Project')).toBeInTheDocument()
    expect(screen.getByText('A new project description')).toBeInTheDocument()
  })

  test('clears form inputs after adding a project', async () => {
    render(<App />)
    const titleInput = screen.getByLabelText('Project Title')
    const descriptionInput = screen.getByLabelText('Description')
    const submitButton = screen.getByText('Add Project')
    
    await userEvent.type(titleInput, 'New Project')
    await userEvent.type(descriptionInput, 'A new project description')
    fireEvent.click(submitButton)
    
    expect(titleInput.value).toBe('')
    expect(descriptionInput.value).toBe('')
  })

  test('does not add project with empty title', async () => {
    render(<App />)
    const titleInput = screen.getByLabelText('Project Title')
    const descriptionInput = screen.getByLabelText('Description')
    const submitButton = screen.getByText('Add Project')
    
    const initialProjectCount = screen.getAllByRole('article').length
    
    await userEvent.type(descriptionInput, 'A description without title')
    fireEvent.click(submitButton)
    
    const finalProjectCount = screen.getAllByRole('article').length
    expect(finalProjectCount).toBe(initialProjectCount)
  })

  test('does not add project with empty description', async () => {
    render(<App />)
    const titleInput = screen.getByLabelText('Project Title')
    const submitButton = screen.getByText('Add Project')
    
    const initialProjectCount = screen.getAllByRole('article').length
    
    await userEvent.type(titleInput, 'New Project')
    fireEvent.click(submitButton)
    
    const finalProjectCount = screen.getAllByRole('article').length
    expect(finalProjectCount).toBe(initialProjectCount)
  })

  test('deletes a project', async () => {
    render(<App />)
    const deleteButtons = screen.getAllByLabelText('Delete project')
    
    fireEvent.click(deleteButtons[0])
    
    expect(screen.queryByText('cat cafe project')).not.toBeInTheDocument()
    expect(screen.getByText('personal website project')).toBeInTheDocument()
  })

  test('shows empty state message when no projects match search', async () => {
    render(<App />)
    const searchInput = screen.getByPlaceholderText('Search projects')
    
    await userEvent.type(searchInput, 'nonexistent')
    
    expect(screen.getByText('No projects matched your search.')).toBeInTheDocument()
  })

  test('renders footer', () => {
    render(<App />)
    expect(screen.getByText(/© 2026 KerryLifestyle Corporation/i)).toBeInTheDocument()
  })

  test('renders GitHub button with correct link', () => {
    render(<App />)
    const githubLink = screen.getByRole('link', { name: /View on GitHub/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/kerrykiambi-lab254')
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  test('added project appears at the top of the list', async () => {
    render(<App />)
    const titleInput = screen.getByLabelText('Project Title')
    const descriptionInput = screen.getByLabelText('Description')
    const submitButton = screen.getByText('Add Project')
    
    await userEvent.type(titleInput, 'First New Project')
    await userEvent.type(descriptionInput, 'First description')
    fireEvent.click(submitButton)
    
    const articles = screen.getAllByRole('article')
    expect(articles[0]).toHaveTextContent('First New Project')
  })
})
