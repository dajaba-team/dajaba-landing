// 랜딩페이지에 들어가는 문구를 한곳에 모아 둔 파일이에요.
// 문구만 바꿀 때는 이 파일만 고치면 돼요.

export const LINKS = {
  github: 'https://github.com/dajaba-team',
}

export const PROJECT_LABEL = '신한은행 넥스트커리어 다자바팀 프로젝트'

export const NAV_ITEMS = [
  { href: '#overview', label: '한눈에 보기' },
  { href: '#features', label: '주요 기능' },
  { href: '#str', label: 'STR 초안' },
  { href: '#roles', label: '역할과 권한' },
]

export const HERO = {
  title: ['수상한 돈의 흐름,', 'AI가 먼저 찾아냅니다'],
  description:
    '다자바는 은행의 자금세탁방지(AML) 업무를 돕는 웹 서비스예요. 거래 데이터에서 의심 거래를 찾아 급한 순서대로 조사역에게 보여 주고, 의심거래보고서(STR) 초안을 만들어 검증과 승인까지 한 흐름으로 이어 줘요.',
}

export const OVERVIEW = {
  eyebrow: 'OVERVIEW',
  title: '거래 한 건이 보고서가 되기까지',
  description:
    '실제 은행 AML 업무 순서를 그대로 따라 만들었어요. 각 단계의 결과는 다음 단계의 근거가 되고, 모든 과정은 기록으로 남아요.',
  steps: [
    { title: '거래 적재', text: '거래 파일을 올리면 백그라운드에서 계좌·거래로 정리해 저장해요.' },
    { title: '룰 경보', text: '자금세탁에서 자주 보이는 거래 모양을 6가지 룰로 검사해 경보를 만들어요.' },
    { title: '위험 점수', text: 'ML·DL 모델이 경보마다 점수를 매겨 HIGH · MEDIUM · LOW로 나눠요.' },
    { title: '케이스 배정', text: '경보를 케이스로 묶어 담당 조사역에게 넘기고, 위험도 순으로 보여 줘요.' },
    { title: '조사', text: '근거 거래, 자금 흐름 그래프, 이력을 보고 질문 패널로 궁금한 점을 바로 물어요.' },
    { title: 'STR 초안', text: '보고가 필요하다고 판단하면 버튼 한 번으로 7개 항목 초안이 만들어져요.' },
    { title: '이중 검증', text: '코드가 숫자를 대조하고, 통과한 초안만 AI 평가자가 다섯 기준으로 채점해요.' },
    { title: '승인 · PDF', text: '담당자가 아닌 승인자가 확정하면 보고서를 PDF로 내려받을 수 있어요.' },
  ],
}

export const DETECTION = {
  badge: '01 탐지',
  title: ['룰은 설명하고,', '모델은 순서를 정해요'],
  paragraphs: [
    '룰은 왜 걸렸는지 말로 설명할 수 있다는 게 장점이에요. 한 계좌로 돈이 몰리는 집중 입금, 돈이 돌아서 제자리로 오는 순환 송금, 받은 돈이 곧바로 빠져나가는 경유 송금처럼 자금세탁에서 자주 보이는 모양을 6가지 룰로 잡아요.',
    '하지만 경보가 많아지면 무엇부터 볼지가 문제예요. 그래서 ML·DL 모델이 경보마다 위험 점수를 매기고, 점수 구간에 따라 등급을 나눠 급한 케이스가 먼저 보이게 했어요.',
  ],
  sampleLabel: '경보 목록 화면 예시',
  sampleAlerts: [
    { name: '집중 입금', text: '여러 계좌에서 한 계좌로 입금', grade: 'HIGH' },
    { name: '순환 송금', text: '돈이 여러 계좌를 거쳐 되돌아옴', grade: 'MEDIUM' },
    { name: '경유 송금', text: '받은 돈이 곧바로 다른 계좌로', grade: 'LOW' },
  ],
}

export const INVESTIGATION = {
  badge: '02 조사',
  title: ['근거는 한 화면에,', '궁금한 건 바로 물어보기'],
  paragraphs: [
    '케이스를 열면 관련 거래 목록, 계좌 사이 돈의 흐름을 그린 그래프, 경보·메모·처리 이력이 한 화면에 모여 있어요. 여러 시스템을 오가며 근거를 모을 필요가 없어요.',
    '케이스 옆 질문 패널에 물어보면 그 케이스의 데이터만 근거로 답해요. 공개된 FATF · FinCEN 자료에서 비슷한 사례를 찾아 주는 검색(RAG)도 붙어 있어서, 이 거래가 알려진 유형과 어디가 닮았는지 비교해 볼 수 있어요.',
  ],
  sampleLabel: '케이스 상세 · 질문 패널 예시',
  question: '이 계좌로 돈을 보낸 상대 계좌들은 모두 다른 은행이야?',
  answer: '케이스에 있는 거래 기준으로 답해 드릴게요. 답에 쓴 근거 거래는 아래에서 바로 열어 볼 수 있어요.',
  answerAction: '근거 거래 보기',
  similarTitle: '비슷한 공개 사례',
  similarText: 'FATF · FinCEN 보고서 속 비슷한 유형의 사례와 위험 지표',
}

export const STR_REPORT = {
  badge: '03 보고',
  title: ['숫자는 코드가 쓰고,', 'AI는 틀릴 수 없는 문장만 골라요'],
  paragraphs: [
    '보고서에서 가장 위험한 건 그럴듯하지만 틀린 숫자예요. 그래서 다자바는 날짜·금액·건수가 들어가는 문장을 AI에게 맡기지 않아요. 코드가 케이스 데이터에서 바로 문장을 만들기 때문에 처음부터 값이 맞아요.',
    '의심 근거와 종합의견 같은 해석 문장은 미리 검토해 둔 문장 목록에서 골라요. 문장마다 "이 조건이 데이터에 있을 때만 쓸 수 있다"는 전제가 붙어 있어서, 사실이 아닌 문장은 처음부터 고를 수 없어요.',
  ],
  sectionsLabel: 'STR 초안 7개 항목 (FinCEN 서술 지침의 육하원칙 구조)',
  sections: [
    { name: '보고 대상', question: '누구인가' },
    { name: '거래 기간', question: '언제' },
    { name: '거래 장소', question: '어느 계좌·은행 사이' },
    { name: '거래 수단', question: '어떤 방식·통화' },
    { name: '거래 방법', question: '돈이 어떻게 움직였나' },
    { name: '의심 근거', question: '왜 이상한가' },
    { name: '종합의견', question: '그래서 무엇을 더 확인해야 하나', highlight: true },
  ],
  checkTitle: '그래도 한 번 더, 두 겹으로 검증해요',
  codeCheck: {
    label: '1차 · 코드 검사',
    title: '원본 데이터와 한 글자씩 대조',
    text: '초안에 나온 금액, 날짜, 통화, 건수가 케이스 데이터와 정확히 맞는지 확인해요. 조사역이 초안을 고친 뒤에도 같은 검사를 다시 돌려요. 하나라도 어긋나면 다음 단계로 넘어가지 않아요.',
  },
  aiCheck: {
    label: '2차 · AI 평가자',
    title: '보고서로서 충분한지 다섯 기준으로',
    criteria: [
      '추측이나 의도를 단정하지 않았는가',
      '근거 없는 주장이 없는가',
      '육하원칙이 빠짐없이 들어 있는가',
      '탐지된 유형과 내용이 맞는가',
      '메모 속 지시문이 섞여 들어가지 않았는가',
    ],
  },
}

export const ROLES = {
  eyebrow: 'ROLES & CONTROL',
  title: '최종 판단은 언제나 사람이 해요',
  description:
    'AI는 찾고 정리하는 일을 맡고, 보고할지 말지는 사람이 정해요. 실제 은행처럼 역할을 나누고, 누가 무엇을 했는지 모두 남겨요.',
  roles: [
    { name: '조사역', text: '배정받은 케이스를 조사하고, 보고가 필요하면 STR 초안을 요청·수정해요.' },
    { name: '승인자', text: '초안을 승인하거나 반려해요. 자기가 담당한 케이스는 승인할 수 없어요.' },
    { name: '관리자', text: '계정을 발급하고, 데이터 적재와 처리 기록을 관리해요.' },
  ],
  tags: ['로그인·조회·변경 기록 보관', 'AI 호출 기록 보관', '공개 IBM 합성 거래 데이터 사용'],
}

export const ARCHITECTURE = {
  eyebrow: 'ARCHITECTURE',
  title: '이렇게 만들었어요',
  description:
    '업무 서버와 AI 서버를 나누고, 오래 걸리는 작업은 큐로 돌려 화면이 멈추지 않게 했어요. 운영 상태와 AI 호출은 대시보드로 지켜봐요.',
  blocks: [
    { name: '업무 서버', stack: 'Spring Boot · PostgreSQL', text: '적재, 룰 탐지, 케이스, STR 승인, 권한' },
    { name: 'AI 서버', stack: 'FastAPI · ML/DL 모델 · RAG', text: '위험 점수, STR 초안·검증, 질문 답변' },
    { name: '화면', stack: 'React', text: '역할별 대시보드, 케이스 상세, 승인 화면' },
    {
      name: '운영',
      stack: 'RabbitMQ · Redis · Elasticsearch · MinIO',
      text: 'Prometheus · Grafana · Langfuse',
    },
  ],
}

export const TEAM = {
  eyebrow: 'TEAM DAJAVA',
  members: ['박진희', '김지윤', '오채영', '배준혁', '염준영'],
}

export const FOOTER = {
  note: '공개 IBM 합성 거래 데이터로 만든 포트폴리오 프로젝트예요.',
}
