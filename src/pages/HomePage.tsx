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

      <section className="about section" aria-labelledby="about-title">
        <div>
          <p className="about__eyebrow">About</p>
          <h2 id="about-title">운영 가능한 화면을 만드는 제작자</h2>
        </div>
        <div className="about__content">
          <p>
            서울사이버대학교 디자인센터에서 홍보 페이지, 안내 페이지, 포스터, 웹 콘텐츠 제작 업무를 경험했습니다.
            시각물을 보기 좋게 만드는 것에서 끝내지 않고, 실제 웹 환경에서 정보가 명확하게 전달되도록 구성하고 구현합니다.
          </p>
          <p>
            디자인 의도를 이해하고 HTML, CSS, JavaScript 기반 화면으로 옮기는 데 집중합니다.
            반복 운영되는 학교와 기관 콘텐츠의 특성을 고려해 가독성, 유지보수성, 정보 우선순위를 함께 봅니다.
          </p>
          <ul className="about__skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Responsive Web</li>
          </ul>
        </div>
      </section>

      <ProjectGrid projects={projects} title="Selected Works" />
    </>
  );
}

export default HomePage;
