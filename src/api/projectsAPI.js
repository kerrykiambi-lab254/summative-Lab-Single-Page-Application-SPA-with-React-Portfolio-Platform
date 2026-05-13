const GITHUB_API_URL = 'https://api.github.com/users/kerrykiambi-lab254/repos';

export async function fetchAllProjects() {
  const response = await fetch(GITHUB_API_URL);
  if (!response.ok) throw new Error('Failed to fetch projects from GitHub');
  const repos = await response.json();
  // Map GitHub repo data to our project format
  return repos.map(repo => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || 'No description available',
    tags: repo.language ? [repo.language] : [],
    imageUrl: `https://via.placeholder.com/300x200?text=${encodeURIComponent(repo.name)}`,
    html_url: repo.html_url,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
  }));
}

export async function fetchProjectById(id) {
  const response = await fetch(`${GITHUB_API_URL}/${id}`);
  if (!response.ok) throw new Error('Project not found on GitHub');
  const repo = await response.json();
  return {
    id: repo.id,
    title: repo.name,
    description: repo.description || 'No description available',
    tags: repo.language ? [repo.language] : [],
    imageUrl: `https://via.placeholder.com/300x200?text=${encodeURIComponent(repo.name)}`,
    html_url: repo.html_url,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
  };
}

// Note: GitHub repos are read-only without authentication
// These functions are placeholders and will throw errors
export async function createProject(project) {
  throw new Error('Cannot create projects on GitHub without authentication');
}

export async function updateProject(id, project) {
  throw new Error('Cannot update projects on GitHub without authentication');
}

export async function deleteProject(id) {
  throw new Error('Cannot delete projects on GitHub without authentication');
}
