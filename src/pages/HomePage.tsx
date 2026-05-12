import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function HomePage() {
  return (
    <>
      <section className="hero section">
        <p className="hero__label">Web Designer · Publisher · Frontend Assistant</p>
        <h1>기획 의도를 화면으로 정확히 구현하는 포트폴리오</h1>
        <p>
          디자인 감각과 퍼블리싱 완성도, 그리고 프론트엔드 협업 경험을 기반으로 실무형 결과물을
          만듭니다.
        </p>
      </section>
      <ProjectGrid projects={projects} title="Selected Works" />
    </>
  );
}

export default HomePage;
