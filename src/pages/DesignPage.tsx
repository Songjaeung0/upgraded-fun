import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function DesignPage() {
  const sorted = [...projects].sort((a, b) => {
    const aFeatured = a.featuredFor.includes('design') ? 1 : 0;
    const bFeatured = b.featuredFor.includes('design') ? 1 : 0;
    return bFeatured - aFeatured;
  });

  return <ProjectGrid projects={sorted} title="Design Projects" />;
}

export default DesignPage;
