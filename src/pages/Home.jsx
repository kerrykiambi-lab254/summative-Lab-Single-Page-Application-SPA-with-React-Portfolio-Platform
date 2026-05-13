import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page home-page">
      <h1>Welcome to Kerry Kiambi's Portfolio</h1>
      <p>Explore my GitHub projects with a modern React single-page application.</p>
      <Link to="/projects" className="button">Browse GitHub Projects</Link>
    </section>
  );
}

export default Home;
