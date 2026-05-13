function About() {
  return (
    <section className="page about-page">
      <div className="about-hero">
        <h1>About This App</h1>
        <p>This React SPA showcases a portfolio platform with client-side routing, custom hooks, and full CRUD functionality.</p>
        <p>It is built to reflect completed projects and live source from the repository below.</p>
        <a
          className="button secondary"
          href="https://github.com/kerrykiambi-lab254
        "
          target="_blank"
          rel="noreferrer"
        >
          View Completed Project Repository
        </a>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h2>Completed Project Flow</h2>
          <p>Browse the completed project list, view details, edit entries, and delete items with responsive navigation and data persistence.</p>
        </article>

        <article className="about-card">
          <h2>well style stufff Styling</h2>
          <p>well maintained site with a modern design.</p>
        </article>

        <article className="about-card">
          <h2>Tested & Ready</h2>
          <p>The app includes a Vitest test suite for components, hooks, routing, and API handling to keep the experience stable.</p>
        </article>
      </div>
    </section>
  );
}

export default About;
