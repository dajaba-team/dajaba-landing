// 위험 점수를 등급으로 바꾸는 규칙. 경계값은 content.js의 thresholds를 받아요.
export function toGrade(score, { medium, high }) {
  if (score >= high) return 'HIGH'
  if (score >= medium) return 'MEDIUM'
  return 'LOW'
}
