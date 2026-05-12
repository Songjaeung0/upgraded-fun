import ProjectGrid from '../components/ProjectGrid';
import { projects } from '../data/projects';

function HomePage() {
  return (
    <>
      <section className="hero section">
        <p className="hero__label">Web Publisher · Visual Design · Frontend Support</p>
        <h1>디자인을 이해하고 구현까지 연결하는 웹 퍼블리셔</h1>
        <p>
          Photoshop과 Illustrator 기반의 시각물 제작부터 HTML, CSS, JavaScript를 활용한 웹 콘텐츠 구현까지 연결해 작업합니다.
        </p>
      </section>
      <ProjectGrid projects={projects} title="Selected Works" />
    </>
  );
}

export default HomePage;
