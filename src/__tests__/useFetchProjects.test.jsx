import { render, screen, waitFor } from '@testing-library/react';
import useFetchProjects from '../hooks/useFetchProjects.js';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: 'Test' }]),
    })
  );
});

afterEach(() => {
  vi.resetAllMocks();
});

function TestComponent() {
  const { projects, loading, error } = useFetchProjects('/fake-url');

  return (
    <div>
      <div data-testid="loading">{loading ? 'loading' : 'done'}</div>
      <div data-testid="error">{error || ''}</div>
      <div data-testid="projects">
        {projects.map((project) => (
          <div key={project.id}>{project.title}</div>
        ))}
      </div>
    </div>
  );
}

describe('useFetchProjects', () => {
  it('loads projects from an API endpoint', async () => {
    render(<TestComponent />);

    await waitFor(() => expect(screen.getByTestId('loading')).toHaveTextContent('done'));
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByTestId('error')).toBeEmptyDOMElement();
  });
});
