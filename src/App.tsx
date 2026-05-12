import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DesignPage from './pages/DesignPage';
import FrontendPage from './pages/FrontendPage';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PublishingPage from './pages/PublishingPage';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/publishing" element={<PublishingPage />} />
        <Route path="/frontend" element={<FrontendPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
