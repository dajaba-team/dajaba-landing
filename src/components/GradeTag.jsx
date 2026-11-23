import styled from 'styled-components'

// 위험 등급별 색. 등급이 늘면 여기만 고치면 돼요.
const GRADE_STYLE = {
  HIGH: { background: '#0046FF', color: '#FFFFFF' },
  MEDIUM: { background: '#C7D6FF', color: '#0B1F66' },
  LOW: { background: '#EEF1F6', color: '#374151' },
}

const Tag = styled.span`
  flex: none;
  font-size: 13px;
  font-weight: 700;
  border-radius: 8px;
  padding: 6px 12px;
`

export default function GradeTag({ grade }) {
  return <Tag style={GRADE_STYLE[grade] ?? GRADE_STYLE.LOW}>{grade}</Tag>
}
