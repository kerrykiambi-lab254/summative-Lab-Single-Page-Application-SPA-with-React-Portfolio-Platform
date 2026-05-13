import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page home-page">
      <h1>Welcome to the Portfolio SPA</h1>
      <p>Build and manage portfolio projects with a modern React single-page application.</p>
      <Link to="/projects" className="button">Browse Projects</Link>
    </section>
  );
}

export default Home;
