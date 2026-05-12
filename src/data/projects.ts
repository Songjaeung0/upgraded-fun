const baseUrl = import.meta.env.BASE_URL;

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: 'Design' | 'Publishing' | 'Frontend';
  role: string;
  tools: string[];
  type: string;
  thumbnail: string;
  featuredFor: Array<'design' | 'publishing' | 'frontend'>;
  overview: string;
  problem: string;
  solution: string;
  result: string;
};

export const projects: Project[] = [
  {
    id: 'culture-festival-site',
    title: 'Culture Festival Promotion Site',
    summary: '지역 문화 페스티벌 홍보를 위한 브랜드 중심 반응형 웹사이트.',
    category: 'Design',
    role: 'UI 디자인 70%, 퍼블리싱 30%',
    tools: ['Figma', 'Photoshop', 'Illustrator'],
    type: 'Team',
    thumbnail: `${baseUrl}assets/img/posters/poster-01.jpg`,
    featuredFor: ['design', 'publishing'],
    overview: '브랜드 아이덴티티를 살리며 프로그램 탐색성을 높인 프로모션 사이트를 제작했습니다.',
    problem: '기존 페이지는 정보가 산재되어 행사 일정 확인까지 클릭이 많았습니다.',
    solution: '카드형 정보 구조와 명확한 CTA 버튼으로 콘텐츠 접근 경로를 단순화했습니다.',
    result: '핵심 프로그램 페이지 유입률이 상승하고 모바일 이탈률이 감소했습니다.'
  },
  {
    id: 'museum-archive-renewal',
    title: 'Museum Archive Renewal',
    summary: '노후화된 아카이브 UI를 개편하고 접근성을 개선한 리뉴얼 프로젝트.',
    category: 'Publishing',
    role: '웹 퍼블리싱 80%, UI 개선 20%',
    tools: ['HTML', 'SCSS', 'JavaScript'],
    type: 'In-house',
    thumbnail: `${baseUrl}assets/img/editorial/exhibition.png`,
    featuredFor: ['publishing', 'frontend'],
    overview: '검색/필터 중심 아카이브 구조를 재설계하고 반응형 레이아웃을 적용했습니다.',
    problem: '데스크톱 고정 레이아웃으로 모바일 가독성이 크게 떨어졌습니다.',
    solution: '모바일 우선 브레이크포인트와 시맨틱 마크업으로 구조를 재구성했습니다.',
    result: '모바일 체류 시간이 증가하고 유지보수성이 개선되었습니다.'
  },
  {
    id: 'campaign-dashboard',
    title: 'Campaign Dashboard',
    summary: '캠페인 성과를 시각화하는 대시보드 프론트엔드 보조 구현.',
    category: 'Frontend',
    role: '프론트엔드 보조 60%, 퍼블리싱 40%',
    tools: ['React', 'TypeScript', 'SCSS'],
    type: 'Collaboration',
    thumbnail: `${baseUrl}assets/img/posters/poster-05.jpg`,
    featuredFor: ['frontend', 'design'],
    overview: '디자인 시스템을 기반으로 재사용 가능한 카드/테이블 컴포넌트를 구축했습니다.',
    problem: '컴포넌트 스타일이 분산되어 화면 일관성이 낮았습니다.',
    solution: '공통 변수와 섹션 컴포넌트 기준을 정의해 UI를 표준화했습니다.',
    result: '신규 화면 추가 속도가 빨라지고 협업 충돌이 줄었습니다.'
  }
];
