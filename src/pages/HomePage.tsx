import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function HomePage() {
  return (
    <>
      <section className="hero section">
        <p className="hero__label">Web Publishing Portfolio</p>
        <h1>디자인을 이해하고 구현까지 연결하는 웹 퍼블리셔</h1>
        <p>
          기획 의도와 사용자 흐름을 바탕으로, 보기 좋은 화면을 실제 서비스 품질로 완성하는 작업을
          지향합니다.
        </p>
      </section>
      <ProjectGrid projects={projects} title="Selected Works" />
    </>
  );
}

export default HomePage;
