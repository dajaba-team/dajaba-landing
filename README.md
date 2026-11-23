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
    FeatureRow.jsx       # 글 + 화면 예시를 나란히 놓는 기능 소개 한 줄
    CheckList.jsx        # 체크 아이콘 목록 (plain / pill)
    GradeTag.jsx         # HIGH · MEDIUM · LOW 등급 표시
    icons.jsx
    Header, Hero, Overview, Features, StrReport, Roles, Architecture, Team, Footer
```

- 스타일은 styled-components, 글꼴은 Pretendard(npm 패키지, 쓰는 글자만 내려받는 dynamic subset)예요.
- 새 섹션은 `Section` + `Container` + `SectionHead`로 만들고, 문구는 `content.js`에 추가해요.
