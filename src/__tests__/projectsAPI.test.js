import { fetchAllProjects, fetchProjectById } from '../api/projectsAPI.js';

describe('projectsAPI', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('fetches all projects from GitHub', async () => {
    const mockRepo = {
      id: 1,
      name: 'test-repo',
      description: 'Test description',
      language: 'JavaScript',
      html_url: 'https://github.com/test/repo',
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2023-01-02T00:00:00Z',
    };
    fetch.mockResolvedValue({ ok: true, json: async () => [mockRepo] });
    const data = await fetchAllProjects();
    expect(data).toEqual([{
      id: 1,
      title: 'test-repo',
      description: 'Test description',
      tags: ['JavaScript'],
      imageUrl: 'https://via.placeholder.com/300x200?text=test-repo',
      html_url: 'https://github.com/test/repo',
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2023-01-02T00:00:00Z',
    }]);
  });

  it('fetches project by id from GitHub', async () => {
    const mockRepo = {
      id: 1,
      name: 'test-repo',
      description: 'Test description',
      language: 'JavaScript',
      html_url: 'https://github.com/test/repo',
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2023-01-02T00:00:00Z',
    };
    fetch.mockResolvedValue({ ok: true, json: async () => mockRepo });
    const data = await fetchProjectById(1);
    expect(data).toEqual({
      id: 1,
      title: 'test-repo',
      description: 'Test description',
      tags: ['JavaScript'],
      imageUrl: 'https://via.placeholder.com/300x200?text=test-repo',
      html_url: 'https://github.com/test/repo',
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2023-01-02T00:00:00Z',
    });
  });
});
