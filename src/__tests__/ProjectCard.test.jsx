import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';

describe('ProjectCard', () => {
  const mockProject = {
    id: 1,
    title: 'Test Project',
    description: 'Project description',
    tags: ['React', 'Test'],
    imageUrl: 'https://via.placeholder.com/300',
    html_url: 'https://github.com/test/repo',
  };

  it('renders the project title and description', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Project description')).toBeInTheDocument();
    expect(screen.getByText('View on GitHub')).toBeInTheDocument();
  });
});
