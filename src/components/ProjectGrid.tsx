import ProjectCard from './ProjectCard';
import type { Project } from '../data/projects';

type Props = {
  projects: Project[];
  title?: string;
};

function ProjectGrid({ projects, title }: Props) {
  return (
    <section className="section">
      {title ? <h2 className="section__title">{title}</h2> : null}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
