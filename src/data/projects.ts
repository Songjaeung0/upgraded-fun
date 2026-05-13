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
    summary: '서명 참여 목적, 참여 현황, 입력 폼을 한 흐름으로 연결한 캠페인 랜딩 페이지입니다.',
    category: 'Frontend',
    role: '웹 디자인 / 퍼블리싱 / JavaScript 구현',
    tools: ['HTML', 'CSS', 'JavaScript', 'Photoshop'],
    type: 'Landing Page',
    thumbnail: assetPath('editorial', 'petition.JPG'),
    featuredFor: ['publishing', 'frontend'],
    overview: '사이버대학 협의회의 서명운동 참여를 유도하기 위해 제작한 캠페인형 랜딩 페이지입니다. 상단 메시지, 참여 수치, 안내문, 개인정보 동의, 입력 폼까지 사용자가 순서대로 이해하고 행동할 수 있도록 구성했습니다.',
    problem: '서명운동 페이지는 목적 설명과 실제 참여 행동이 자연스럽게 연결되어야 했습니다. 정보가 흩어지면 사용자가 캠페인의 필요성을 이해하기 전에 이탈할 수 있어, 설득 흐름과 입력 동선을 함께 정리해야 했습니다.',
    solution: '핵심 메시지와 참여 수치를 상단에 배치해 신뢰와 긴급성을 먼저 전달했습니다. 이후 설명문, 개인정보 동의, 입력 영역을 단계적으로 배치하고 JavaScript 기반 입력 흐름을 적용해 참여 과정이 끊기지 않도록 구현했습니다.',
    result: '캠페인 홍보와 서명 참여 기능이 한 화면 안에서 이어지는 운영형 랜딩 페이지로 완성했습니다. 사용자가 목적을 이해한 뒤 바로 행동할 수 있는 구조를 만드는 데 집중했습니다.'
  },
  {
    id: 'kim-shinyoung-award-guide',
    title: '김신영 기독여성 봉사상 수상 대상자 추천 안내',
    summary: '수상 후보 추천 기준과 접수 절차를 정리한 정보 안내형 페이지입니다.',
    category: 'Frontend',
    role: '웹 디자인 / 퍼블리싱 / JavaScript 구현',
    tools: ['HTML', 'CSS', 'JavaScript', 'Photoshop'],
    type: 'Information Page',
    thumbnail: assetPath('editorial', 'award.JPG'),
    featuredFor: ['publishing', 'frontend', 'design'],
    overview: '봉사상 소개, 추천 기준, 접수 일정, 신청 입력 영역을 한 페이지에서 확인할 수 있도록 제작한 안내 페이지입니다. 공식적인 행사 성격을 유지하면서도 사용자가 필요한 정보를 빠르게 찾을 수 있도록 구성했습니다.',
    problem: '추천 안내 페이지는 행사 소개와 신청 안내가 함께 들어가 정보량이 많아지기 쉽습니다. 특히 후보 추천 조건, 접수 일정, 제출 정보가 섞이면 사용자가 다음 행동을 판단하기 어려울 수 있었습니다.',
    solution: '상단에는 수상 안내의 성격을 드러내는 비주얼과 주요 정보를 배치하고, 하단에는 신청 단계와 입력 영역을 분리했습니다. 배경 색상과 버튼 톤을 통일해 공신력 있는 분위기를 유지하면서 정보 구획을 명확히 했습니다.',
    result: '행사 안내와 추천 접수 흐름을 한 페이지 안에서 이해할 수 있도록 정리했습니다. 정보 전달 중심의 페이지지만, 신청 행동까지 이어질 수 있는 구조로 제작했습니다.'
  },
  {
    id: 'korea-australia-design-exhibition',
    title: '2025 한호디자인 초대전 페이지',
    summary: '참여 작가 목록과 작품 정보를 분리해 보여주는 전시형 웹 콘텐츠입니다.',
    category: 'Frontend',
    role: 'UI 구성 / 웹 콘텐츠 구현',
    tools: ['HTML', 'CSS', 'JavaScript'],
    type: 'Exhibition Page',
    thumbnail: assetPath('editorial', 'exhibition.png'),
    featuredFor: ['frontend', 'design'],
    overview: '한호디자인 초대전의 참여 작가와 작품 정보를 소개하기 위해 제작한 전시형 웹 콘텐츠입니다. 많은 참여자 정보를 한 화면에서 탐색할 수 있도록 목록 영역과 상세 콘텐츠 영역을 분리했습니다.',
    problem: '참여 작가가 많아 단순 나열 방식으로 구성하면 사용자가 원하는 정보를 찾기 어렵고, 작품 이미지와 작가 설명의 주목도도 떨어질 수 있었습니다. 정보 밀도를 낮추면서 탐색성을 확보하는 것이 중요했습니다.',
    solution: '좌측에는 참여자 목록을 배치하고 우측에는 선택된 작가와 작품 정보를 크게 보여주는 구조로 정리했습니다. 화면을 분할해 목록 탐색과 상세 확인이 동시에 가능하도록 구성하고, JavaScript로 콘텐츠 전환 흐름을 구현했습니다.',
    result: '다수의 작가 정보를 정리하면서도 작품 소개 영역의 집중도를 유지한 전시형 페이지로 완성했습니다. 단순 홍보물이 아니라 탐색 가능한 웹 콘텐츠로 구성했습니다.'
  },
  {
    id: 'lee-gyudo-memorial-page',
    title: '이규도 성악가 추모 페이지',
    summary: '인물 소개와 음악 자료를 감성적인 화면 흐름으로 구성한 추모 페이지입니다.',
    category: 'Frontend',
    role: '웹 디자인 / 콘텐츠 구성 / JavaScript 구현',
    tools: ['Photoshop', 'HTML', 'CSS', 'JavaScript'],
    type: 'Memorial Page',
    thumbnail: assetPath('editorial', 'memorial.JPG'),
    featuredFor: ['design', 'publishing', 'frontend'],
    overview: '성악가의 활동과 음악 자료를 소개하기 위해 제작한 추모 페이지입니다. 인물 이미지, 추모 분위기, 음악 콘텐츠를 결합해 단순한 안내 페이지보다 감성적인 콘텐츠 경험을 만들고자 했습니다.',
    problem: '추모 페이지는 정보 전달만으로는 충분하지 않고, 인물과 음악을 기억하는 분위기를 함께 전달해야 했습니다. 과하게 장식하면 내용의 진정성이 약해지고, 너무 단순하면 추모 페이지의 정서가 살아나지 않을 수 있었습니다.',
    solution: '부드러운 색감과 꽃, 나비, 앨범 형태의 음악 요소를 활용해 차분한 분위기를 만들었습니다. 인물 비주얼과 음악 리스트를 분리해 시선 흐름을 안정적으로 만들고, JavaScript 기반 콘텐츠 전환 요소를 함께 구현했습니다.',
    result: '정적인 정보 안내가 아니라 인물과 음악을 함께 기억할 수 있는 추모 콘텐츠형 페이지로 완성했습니다. 감성적인 톤과 웹 화면 구성을 함께 고려한 작업입니다.'
  },
  {
    id: 'healing-camp-poster',
    title: '2025 하이라이프 힐링캠프 포스터',
    summary: '캠프의 분위기와 모집 정보를 한눈에 전달하는 웰니스 프로그램 홍보 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-05.jpg'),
    featuredFor: ['design'],
    overview: '웰니스 건강대학 Signature 프로그램인 하이라이프 힐링캠프를 홍보하기 위해 제작한 포스터입니다. 장소, 일정, 모집 기간, 대상, 프로그램 구성을 한 장 안에서 확인할 수 있도록 구성했습니다.',
    problem: '캠프형 프로그램은 휴식과 건강 관리의 이미지를 전달하면서도 신청에 필요한 정보를 명확하게 보여줘야 합니다. 이미지 중심으로만 구성하면 정보성이 약해지고, 텍스트 중심으로만 구성하면 프로그램의 매력이 줄어들 수 있었습니다.',
    solution: '해변과 리조트 이미지를 활용해 힐링 프로그램의 분위기를 먼저 전달했습니다. 일정과 대상 정보는 좌측에 정리하고, 프로그램 구성은 하단 카드형 영역으로 분리해 시각적 흥미와 정보 가독성을 함께 확보했습니다.',
    result: '프로그램의 청량한 이미지와 모집 정보를 동시에 전달하는 홍보 포스터로 완성했습니다. 한 장 안에서 분위기, 일정, 참여 정보를 순서대로 읽을 수 있도록 구성했습니다.'
  },
  {
    id: 'piano-concours-poster',
    title: 'SCU 아마추어 피아노 콩쿠르 포스터',
    summary: '콩쿠르의 격식과 참가 정보를 함께 전달하는 음악 행사 홍보 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-06.jpg'),
    featuredFor: ['design'],
    overview: '서울사이버대학교 피아노과 아마추어 피아노 콩쿠르를 안내하기 위해 제작한 세로형 포스터입니다. 행사명, 일정, 참가 부문, 시상 내역, 신청 방법, 문의 정보를 순서대로 정리했습니다.',
    problem: '콩쿠르 포스터는 행사 이미지의 고급스러움과 신청 정보의 명확성이 모두 필요했습니다. 특히 시상 내역과 참가 조건이 많아 정보가 복잡해 보이지 않도록 시각적 위계를 잡는 것이 중요했습니다.',
    solution: '블랙과 골드 톤을 중심으로 무대감과 격식을 표현했습니다. 제목, 시상, 특전, 신청 정보, 문의 영역을 구획별로 나누고, 강조가 필요한 금액과 일정은 크기와 색으로 분명하게 구분했습니다.',
    result: '음악 행사의 분위기를 유지하면서도 참가자가 필요한 정보를 빠르게 확인할 수 있는 포스터로 완성했습니다. 행사 홍보와 신청 안내 기능을 모두 고려한 작업입니다.'
  },
  {
    id: 'gangbuk-story-contest-poster',
    title: '강북구와 함께하는 장르 스토리 맞춤 공모전 포스터',
    summary: '모집 부문, 일정, 혜택, 유의사항을 구조화한 공모전 안내 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인 / 정보 구조 정리',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'gangbuk-01.jpg'),
    featuredFor: ['design'],
    overview: '서울사이버대학교와 테일식스 협업 공모전을 안내하기 위해 제작한 포스터입니다. 모집 부문, 일정, 신청 방법, 참여 혜택, 유의사항처럼 많은 정보를 한 장 안에 정리했습니다.',
    problem: '공모전 안내물은 필수 정보가 많아 자칫하면 문서처럼 보이기 쉽습니다. 지원자가 모집 부문과 혜택을 먼저 파악한 뒤 세부 조건을 확인할 수 있도록 정보 우선순위를 조정해야 했습니다.',
    solution: '큰 제목으로 공모전 성격을 먼저 전달하고, 모집 부문은 표 형태로 정리했습니다. 일정과 신청 방법은 좌측에 묶고, 참여 혜택은 별도 박스로 강조해 지원자가 핵심 정보를 빠르게 확인할 수 있도록 구성했습니다.',
    result: '정보량이 많은 공모전 내용을 시각적으로 구분해 읽기 쉬운 안내 포스터로 완성했습니다. 홍보성과 안내성을 동시에 고려한 작업입니다.'
  },
  {
    id: 'counseling-psychology-seminar-poster',
    title: '국제상담심리세미나 포스터',
    summary: '국제 세미나의 연사 정보와 프로그램 일정을 정리한 학술 행사 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인 / 정보 편집',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-01.jpg'),
    featuredFor: ['design'],
    overview: '국제상담심리세미나의 행사 개요, 초청 연사, 주제, 프로그램 시간표를 안내하기 위해 제작한 학술 행사 포스터입니다. 전문성과 가독성을 함께 보여주는 방향으로 구성했습니다.',
    problem: '초청 연사와 시간표 정보가 길어 단순히 배치하면 화면이 복잡해질 수 있었습니다. 학술 행사 특성상 신뢰감 있는 톤을 유지하면서도 긴 정보를 쉽게 읽히게 만드는 것이 필요했습니다.',
    solution: '상단에는 행사명과 핵심 정보를 배치하고, 연사 정보는 카드형 그리드로 정리했습니다. 프로그램은 표 형태로 구성해 시간, 주제, 연사를 빠르게 비교할 수 있도록 만들었습니다.',
    result: '국제 세미나의 전문성을 유지하면서도 참여자가 일정과 연사 정보를 쉽게 확인할 수 있는 포스터로 완성했습니다. 정보 편집 역량을 보여주는 작업입니다.'
  },
  {
    id: 'webnovel-contest-poster',
    title: '웹소설 2만자 공모전 포스터',
    summary: '응모 조건과 시상 정보를 명확하게 정리한 웹소설 공모전 안내 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-02.jpg'),
    featuredFor: ['design'],
    overview: '웹문예창작학과의 웹소설 2만자 공모전을 홍보하기 위해 제작한 포스터입니다. 공모 요건, 응모 기간, 제출 방법, 시상 및 발표 정보를 단계적으로 확인할 수 있도록 구성했습니다.',
    problem: '공모전 참여 조건과 유의사항이 많아 정보가 흩어지면 지원자가 참여 가능 여부를 판단하기 어렵습니다. 특히 응모 기간, 제출 방법, 시상 정보를 명확히 구분해야 했습니다.',
    solution: '상단은 공모전의 주목도를 높이는 제목 영역으로 구성하고, 본문은 공모요건, 응모 기간 및 방법, 시상 및 발표로 나눴습니다. 번호와 박스 구조를 활용해 정보의 순서를 명확히 했습니다.',
    result: '지원자가 공모전의 핵심 조건과 참여 방법을 빠르게 파악할 수 있는 안내 포스터로 완성했습니다. 복잡한 정보를 한 장 안에 구조화하는 데 집중했습니다.'
  },
  {
    id: 'ai-research-ethics-lecture-poster',
    title: '생성형 AI 핵심 기능과 연구윤리 특강 포스터',
    summary: 'AI 활용 특강의 준비 사항과 시간표를 정리한 강의 안내 포스터입니다.',
    category: 'Design',
    role: '포스터 디자인 / 정보 편집',
    tools: ['Photoshop', 'Illustrator'],
    type: 'Poster',
    thumbnail: assetPath('posters', 'poster-04.jpg'),
    featuredFor: ['design'],
    overview: '생성형 AI 활용 특강의 강의 목적, 참여 방식, 실습 준비물, 시간표, 자료 공유 안내를 한 장에 정리한 포스터입니다. 강의 참여자가 사전에 필요한 정보를 놓치지 않도록 구성했습니다.',
    problem: 'AI 특강은 강의 내용뿐 아니라 실습 준비 사항과 접속 도구 안내가 함께 필요했습니다. 정보가 많아질수록 핵심 일정과 준비물이 묻힐 수 있어, 참여자가 바로 확인해야 하는 항목을 구분해야 했습니다.',
    solution: '청강 모드와 실습 모드를 좌측에 분리하고, 우측에는 시간표를 표 형태로 정리했습니다. 하단에는 QR과 자료 공유 안내를 배치해 강의 전후 행동까지 이어지도록 구성했습니다.',
    result: '강의 일정, 실습 준비, 자료 접근 정보를 한 번에 확인할 수 있는 안내 포스터로 완성했습니다. 정보량이 많은 특강 내용을 명확하게 정리한 작업입니다.'
  }
];
