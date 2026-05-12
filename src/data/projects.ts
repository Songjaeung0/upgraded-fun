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

const assetPath = (folder: 'editorial' | 'posters', fileName: string) =>
  `${import.meta.env.BASE_URL}assets/img/${folder}/${fileName}`;

export const projects: Project[] = [
  {
    id: 'signature-petition-campaign',
    title: '국회 통과 촉구 서명운동 페이지',
    summary: '사이버대학 협의회 서명운동 참여를 위한 랜딩 페이지와 입력 폼 화면입니다.',
    category: 'Publishing',
    role: '웹 퍼블리싱 / 운영 페이지 제작',
    tools: ['HTML', 'CSS', 'Photoshop'],
    type: 'Landing Page',
    thumbnail: assetPath('editorial', 'petition.JPG'),
    featuredFor: ['publishing', 'frontend'],
    overview: '서명운동 참여 목적과 참여 현황, 개인정보 동의 및 입력 흐름을 한 페이지 안에서 확인할 수 있도록 구성했습니다.',
    problem: '참여자가 서명 목적을 이해하고 입력까지 자연스럽게 이어지도록 정보 구조와 CTA가 명확해야 했습니다.',
    solution: '상단 비주얼, 참여 수치, 설명 문구, 입력 폼, 하단 근거 콘텐츠 순서로 흐름을 정리해 참여 동선을 단순화했습니다.',
    result: '홍보성 메시지와 신청 기능이 결합된 운영형 랜딩 페이지로 제작했습니다.'
  },
  {
    id: 'kim-shinyoung-award-guide',
    title: '김신영 기독여성 봉사상 수상 대상자 추천 안내',
    summary: '수상 후보 추천 정보를 전달하고 접수 양식으로 연결되는 안내 페이지입니다.',
    category: 'Publishing',
    role: '웹 디자인 / 퍼블리싱',
    tools: ['HTML', 'CSS', 'Photoshop'],
    type: 'Information Page',
    thumbnail: assetPath('editorial', 'award.JPG'),
    featuredFor: ['publishing', 'design'],
    overview: '봉사상 소개, 추천 조건, 접수 절차, 신청 입력 영역을 차례대로 배치한 정보 안내형 페이지입니다.',
    problem: '수상 안내와 추천 신청이 함께 포함되어 있어 정보량이 많고 사용자가 필요한 내용을 빠르게 찾아야 했습니다.',
    solution: '주요 안내 영역과 입력 영역을 시각적으로 분리하고, 색상 톤을 통일해 페이지의 성격과 신뢰감을 유지했습니다.',
    result: '행사 안내와 접수 흐름을 한 화면에서 이해할 수 있는 페이지로 정리했습니다.'
  },
  {
    id: 'korea-australia-design-exhibition',
    title: '2025 한호디자인 초대전 페이지',
    summary: '초대전 참여 작가와 작품 정보를 보여주는 전시형 웹 콘텐츠입니다.',
    category: 'Frontend',
    role: 'UI 구성 / 웹 콘텐츠 구현',
    tools: ['HTML', 'CSS', 'JavaScript'],
    type: 'Exhibition Page',
    thumbnail: assetPath('editorial', 'exhibition.png'),
    featuredFor: ['frontend', 'design'],
    overview: '작가 목록과 작품 정보를 분리해 보여주는 전시 소개형 페이지입니다.',
    problem: '많은 참여자명과 작품 상세 정보를 동시에 보여줘야 하므로 화면의 정보 밀도 조절이 중요했습니다.',
    solution: '좌측에는 참여자 리스트를 배치하고, 우측에는 선택된 작가와 작품 정보를 크게 보여주는 구조로 정리했습니다.',
    result: '전시 콘텐츠를 탐색하기 쉬운 형태로 구성한 인터랙션 중심 페이지입니다.'
  },
  {
    id: 'lee-gyudo-memorial-page',
    title: '이규도 성악가 추모 페이지',
    summary: '성악가 추모 콘텐츠와 음악 자료를 감성적으로 구성한 추모 페이지입니다.',
    category: 'Design',
    role: '웹 디자인 / 콘텐츠 구성',
    tools: ['Photoshop', 'HTML', 'CSS'],
    type: 'Memorial Page',
    thumbnail: assetPath('editorial', 'memorial.JPG'),
    featuredFor: ['design', 'publishing'],
    overview: '인물 이미지, 추모 분위기, 음악 콘텐츠를 결합해 고인의 활동을 소개하는 페이지입니다.',
    problem: '추모 페이지 특성상 정보 전달뿐 아니라 분위기와 톤을 섬세하게 맞추는 것이 중요했습니다.',
    solution: '부드러운 색감과 장식 요소를 활용하고, 음악 콘텐츠를 앨범 형태로 배치해 추모 성격을 강화했습니다.',
    result: '정적인 안내 페이지가 아니라 인물과 음악을 함께 기억할 수 있는 콘텐츠형 페이지로 제작했습니다.'
  },
  {
    id: 'healing-camp-poster',
    title: '2025 하이라이프 힐링캠프 포스터',
    summary: '웰니스 건강대학 Signature 프로그램 홍보용 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-05.jpg'),
    featuredFor: ['design'],
    overview: '장소, 일정, 모집 기간, 프로그램 구성을 한눈에 확인할 수 있도록 제작한 홍보 포스터입니다.',
    problem: '캠프형 프로그램 특성상 행사 분위기와 실질 정보를 동시에 전달해야 했습니다.',
    solution: '해변 이미지와 청량한 색감을 사용하고, 프로그램 정보는 카드형 영역으로 분리해 가독성을 높였습니다.',
    result: '프로그램의 휴식 이미지와 모집 정보를 함께 전달하는 시각물로 완성했습니다.'
  },
  {
    id: 'piano-concours-poster',
    title: 'SCU 아마추어 피아노 콩쿠르 포스터',
    summary: '피아노 콩쿠르 참가 안내를 위한 고급스러운 톤의 홍보 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-06.jpg'),
    featuredFor: ['design'],
    overview: '콩쿠르 일정, 참가 부문, 시상 내역, 신청 방법을 세로형 포스터 안에 정리했습니다.',
    problem: '시상 정보와 참가 안내가 많아 시각적 위계를 명확히 잡아야 했습니다.',
    solution: '골드와 블랙 톤을 중심으로 무대감을 만들고, 구획별 정보 배치를 통해 읽는 순서를 정리했습니다.',
    result: '행사의 격식과 신청 정보를 함께 보여주는 홍보 포스터로 제작했습니다.'
  },
  {
    id: 'gangbuk-story-contest-poster',
    title: '강북구와 함께하는 장르 스토리 맞춤 공모전 포스터',
    summary: '서울사이버대학교와 테일식스 협업 공모전 안내 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인 / 정보 구조 정리',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'gangbuk-01.jpg'),
    featuredFor: ['design', 'publishing'],
    overview: '모집 부문, 일정, 신청 방법, 참여 혜택, 유의사항을 한 장에 정리한 공모전 포스터입니다.',
    problem: '공모전 안내는 세부 정보가 많아 시각적으로 복잡해지기 쉬웠습니다.',
    solution: '큰 제목과 표, 혜택 박스, 유의사항 영역을 나눠 정보 우선순위를 분명히 했습니다.',
    result: '지원자가 핵심 조건과 혜택을 빠르게 확인할 수 있는 공모전 안내물로 제작했습니다.'
  },
  {
    id: 'counseling-psychology-seminar-poster',
    title: '국제상담심리세미나 포스터',
    summary: '국제 상담심리 세미나의 연사와 프로그램을 소개하는 안내 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인 / 정보 편집',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-01.jpg'),
    featuredFor: ['design'],
    overview: '행사 개요, 초청 연사, 프로그램 시간표를 포함한 학술 세미나 포스터입니다.',
    problem: '연사 정보와 시간표가 길어 단순 나열만으로는 가독성이 떨어질 수 있었습니다.',
    solution: '연사 카드를 그리드로 구성하고, 프로그램은 표 형태로 정리해 정보 탐색이 쉽도록 구성했습니다.',
    result: '학술 행사의 전문성과 안내 기능을 함께 충족하는 포스터로 제작했습니다.'
  },
  {
    id: 'webnovel-contest-poster',
    title: '웹소설 2만자 공모전 포스터',
    summary: '웹문예창작학과 공모전 참여를 유도하는 웹소설 공모전 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-02.jpg'),
    featuredFor: ['design', 'publishing'],
    overview: '공모 요건, 응모 기간, 시상 및 발표 정보를 구조화한 공모전 포스터입니다.',
    problem: '공모전 정보가 길고 조건이 많아 사용자가 참여 가능 여부를 빠르게 판단하기 어려울 수 있었습니다.',
    solution: '섹션별 박스 구조와 강조 색상을 사용해 모집 조건, 방법, 시상 정보를 구분했습니다.',
    result: '참여 조건과 혜택이 명확하게 보이는 공모전 홍보물로 완성했습니다.'
  },
  {
    id: 'ai-research-ethics-lecture-poster',
    title: '생성형 AI 핵심 기능과 연구윤리 특강 포스터',
    summary: 'AI 활용 특강의 강의 모드와 실습 내용을 안내하는 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인 / 정보 편집',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-04.jpg'),
    featuredFor: ['design'],
    overview: '특강 목적, 참여 모드, 실습 도구, 시간표, QR 정보를 한 장에 구성한 안내 포스터입니다.',
    problem: '강의 정보와 실습 준비 사항이 많아 사용자가 중요한 준비 항목을 놓치기 쉬웠습니다.',
    solution: '강의 모드와 실습 모드를 분리하고, 시간표와 준비 항목을 블록화해 읽기 쉽게 정리했습니다.',
    result: '강의 참여자가 일정과 준비물을 빠르게 파악할 수 있는 안내 포스터로 제작했습니다.'
  }
];
