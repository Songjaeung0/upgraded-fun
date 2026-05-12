import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <article className="detail section">
      <Link to="/" className="detail__back">
        ← Back
      </Link>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>

      <section>
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>
      <section>
        <h2>My Role</h2>
        <p>{project.role}</p>
      </section>
      <section>
        <h2>Problem</h2>
        <p>{project.problem}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p>{project.solution}</p>
      </section>
      <section>
        <h2>Result</h2>
        <p>{project.result}</p>
      </section>
    </article>
  );
}

export default ProjectDetailPage;
