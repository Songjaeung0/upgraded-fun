import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const detailSections = [
  { key: 'overview', title: 'Overview' },
  { key: 'problem', title: 'Problem' },
  { key: 'solution', title: 'Solution' },
  { key: 'result', title: 'Result' }
] as const;

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

      <header className="detail__header">
        <div className="detail__intro">
          <p className="detail__type">{project.type}</p>
          <h1>{project.title}</h1>
          <p className="detail__summary">{project.summary}</p>
        </div>
        <dl className="detail__meta">
          <div>
            <dt>Category</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
      </header>

      <div className="detail__hero">
        <img src={project.thumbnail} alt={project.title} />
      </div>

      <section className="detail__tools-section" aria-labelledby="detail-tools-title">
        <h2 id="detail-tools-title">Tools</h2>
        <ul className="detail__tools">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>

      <div className="detail__content-grid">
        {detailSections.map((section) => (
          <section key={section.key} className="detail__content-card">
            <h2>{section.title}</h2>
            <p>{project[section.key]}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

export default ProjectDetailPage;
