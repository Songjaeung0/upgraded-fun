import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function FrontendPage() {
  const sorted = [...projects].sort((a, b) => {
    const aFeatured = a.featuredFor.includes('frontend') ? 1 : 0;
    const bFeatured = b.featuredFor.includes('frontend') ? 1 : 0;
    return bFeatured - aFeatured;
  });

  return <ProjectGrid projects={sorted} title="Frontend Projects" />;
}

export default FrontendPage;
