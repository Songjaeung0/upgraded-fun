import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function PublishingPage() {
  const sorted = [...projects].sort((a, b) => {
    const aFeatured = a.featuredFor.includes('publishing') ? 1 : 0;
    const bFeatured = b.featuredFor.includes('publishing') ? 1 : 0;
    return bFeatured - aFeatured;
  });

  return <ProjectGrid projects={sorted} title="Publishing Projects" />;
}

export default PublishingPage;
