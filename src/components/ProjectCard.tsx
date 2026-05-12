import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  const [imageError, setImageError] = useState(false);
  const projectLabel = project.type || project.category;

  return (
    <article className="project-card">
      {imageError ? (
        <div className="project-card__placeholder" aria-label={`${project.title} placeholder`}>
          <span className="project-card__type">{projectLabel}</span>
          <strong>{project.title}</strong>
        </div>
      ) : (
        <div className="project-card__thumb-wrap">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-card__thumb"
            onError={() => setImageError(true)}
          />
          <span className="project-card__type">{projectLabel}</span>
        </div>
      )}
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <dl className="project-card__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
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
