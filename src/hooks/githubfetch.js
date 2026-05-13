import { useState, useEffect } from 'react';

const username = '/kerrykiambi-lab254';
export const useGitHubProjects = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!username) {
        setRepos([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=8`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub repos: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};
