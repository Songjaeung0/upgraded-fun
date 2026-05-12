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
    id: 'brand-campaign-landing',
    title: '브랜드 캠페인 랜딩 페이지',
    summary: '프로모션 메시지를 직관적으로 전달하는 반응형 캠페인 랜딩 페이지 제작.',
    category: 'Design',
    role: 'UI 설계 및 퍼블리싱',
    tools: ['Figma', 'Photoshop', 'SCSS'],
    type: 'Promotion',
    thumbnail: `${baseUrl}assets/img/posters/poster-01.jpg`,
    featuredFor: ['design', 'publishing'],
    overview: '짧은 체류 시간 안에 핵심 정보를 전달할 수 있도록 콘텐츠 흐름을 설계했습니다.',
    problem: '기존 랜딩은 정보 우선순위가 불명확해 CTA 클릭 전환율이 낮았습니다.',
    solution: '히어로-핵심혜택-신뢰요소-CTA 구조로 섹션을 재배치하고 시각 계층을 정리했습니다.',
    result: '주요 버튼 도달률과 모바일 전환율이 개선되었습니다.'
  },
  {
    id: 'public-service-renewal',
    title: '공공서비스 웹사이트 리뉴얼',
    summary: '정보 접근성과 가독성을 높인 공공서비스 웹사이트 UI/퍼블리싱 개선 프로젝트.',
    category: 'Publishing',
    role: '웹 퍼블리싱 및 접근성 개선',
    tools: ['HTML', 'SCSS', 'JavaScript'],
    type: 'Renewal',
    thumbnail: `${baseUrl}assets/img/editorial/exhibition.png`,
    featuredFor: ['publishing', 'frontend'],
    overview: '복잡한 정보 구조를 사용자 관점으로 재정렬하고 반응형 레이아웃을 적용했습니다.',
    problem: '모바일 환경에서 텍스트 밀도와 버튼 간격 문제로 사용성이 저하되었습니다.',
    solution: '브레이크포인트별 타이포/간격 시스템을 재정의하고 시맨틱 구조를 개선했습니다.',
    result: '모바일 가독성과 주요 민원 메뉴 탐색 속도가 향상되었습니다.'
  },
  {
    id: 'admin-dashboard-support',
    title: '운영 대시보드 프론트엔드 지원',
    summary: '운영 지표 확인을 위한 대시보드 화면을 컴포넌트 중심으로 보조 구현한 작업.',
    category: 'Frontend',
    role: '프론트엔드 보조 구현 및 UI 유지보수',
    tools: ['React', 'TypeScript', 'SCSS'],
    type: 'Dashboard',
    thumbnail: `${baseUrl}assets/img/posters/poster-05.jpg`,
    featuredFor: ['frontend', 'design'],
    overview: '기존 디자인 시스템 기준에 맞춰 공통 카드/리스트 UI를 구현했습니다.',
    problem: '화면별 구현 방식이 달라 유지보수와 협업 시 중복 작업이 많았습니다.',
    solution: '재사용 가능한 컴포넌트 단위로 구조를 정리하고 타입 기반 props를 통일했습니다.',
    result: '화면 추가 시 개발 속도가 빨라지고 코드 일관성이 높아졌습니다.'
  }
];
