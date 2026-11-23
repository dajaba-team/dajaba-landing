# 다자바 랜딩페이지

다자바(AML 의심거래 탐지 + STR 초안) 프로젝트를 소개하는 한 페이지짜리 사이트예요.
리플렛 QR이 이 페이지로 연결돼요.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # dist/ 에 배포용 파일 생성
npm run lint
```

## 구조

```
src/
  data/content.js        # 페이지 문구 전부 (문구만 바꿀 때는 여기만)
  theme.js               # 색·글꼴·폭·브레이크포인트
  GlobalStyle.js         # 전역 스타일
  App.jsx                # 섹션 순서
  components/
    common/styles.js     # Container, Section, Title, Badge, Visual 등 공통 스타일
    common/SectionHead.jsx
    common/MultiLine.jsx
    common/Reveal.jsx    # 화면에 들어오면 떠오르며 나타나는 감싸개
    FeatureRow.jsx       # 글 + 화면 예시를 나란히 놓는 기능 소개 한 줄
    FlowGraph.jsx        # 히어로의 집중 입금 흐름 애니메이션
    ScoreChart.jsx       # 위험 점수 막대 + 등급 경계선 (예시)
    ChatSample.jsx       # 질문 패널 타이핑 예시
    CheckList.jsx        # 체크 아이콘 목록 (plain / pill), 하나씩 체크되며 등장
    GradeTag.jsx         # HIGH · MEDIUM · LOW 등급 표시
    icons.jsx
  hooks/useInView.js     # 화면에 들어왔는지
  hooks/useReducedMotion.js
  utils/grade.js         # 점수 → 등급 규칙
    Header, Hero, Overview, Features, StrReport, Roles, Architecture, Team, Footer
```

- 스타일은 styled-components, 글꼴은 Pretendard(npm 패키지, 쓰는 글자만 내려받는 dynamic subset)예요.
- 새 섹션은 `Section` + `Container` + `SectionHead`로 만들고, 문구는 `content.js`에 추가해요.
- 움직임은 모두 '동작 줄이기'(prefers-reduced-motion) 설정을 켜면 멈춰요.
