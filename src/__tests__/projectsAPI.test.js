import { createProject, fetchAllProjects, fetchProjectById, updateProject, deleteProject } from '../api/projectsAPI.js';

describe('projectsAPI', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('fetches all projects', async () => {
    fetch.mockResolvedValue({ ok: true, json: async () => [{ id: 1 }] });
    const data = await fetchAllProjects();
    expect(data).toEqual([{ id: 1 }]);
  });

  it('fetches project by id', async () => {
    fetch.mockResolvedValue({ ok: true, json: async () => ({ id: 1 }) });
    const data = await fetchProjectById(1);
    expect(data).toEqual({ id: 1 });
  });
});
