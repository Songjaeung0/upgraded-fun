import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function FrontendPage() {
  const filtered = projects.filter((project) => project.featuredFor.includes('frontend'));

  return <ProjectGrid projects={filtered} title="Frontend Projects" />;
}

export default FrontendPage;
