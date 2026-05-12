import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function PublishingPage() {
  const filtered = projects.filter((project) => project.featuredFor.includes('publishing'));

  return <ProjectGrid projects={filtered} title="Publishing Projects" />;
}

export default PublishingPage;
