import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <img src={project.thumbnail} alt={project.title} className="project-card__thumb" />
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <dl className="project-card__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
        </dl>
        <ul className="project-card__tags">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <Link to={`/projects/${project.id}`} className="project-card__link">
          View Detail
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
