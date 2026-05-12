import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function DesignPage() {
  const filtered = projects.filter((project) => project.featuredFor.includes('design'));

  return <ProjectGrid projects={filtered} title="Design Projects" />;
}

export default DesignPage;
