import styled from 'styled-components'
import { useInView } from '../hooks/useInView'
import { toGrade } from '../utils/grade'
import GradeTag from './GradeTag'

const BAR_COLOR = { HIGH: '#0046FF', MEDIUM: '#7C9BFF', LOW: '#C5CDDB' }

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const Row = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const RowHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    font-size: 15px;
  }

  span {
    font-size: 13px;
    color: ${({ theme }) => theme.color.subtle};
  }
`

const Track = styled.div`
  position: relative;
  height: 12px;
  border-radius: 999px;
  background: #eef1f6;
`

const Fill = styled.div`
  height: 100%;
  border-radius: inherit;
  width: ${({ $value }) => $value * 100}%;
  background: ${({ $color }) => $color};
  transition: width 1.2s cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}ms;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

const Marker = styled.span`
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: ${({ $at }) => $at * 100}%;
  width: 2px;
  background: ${({ theme }) => theme.color.ink};
  opacity: 0.35;
`

const Score = styled.span`
  font-size: 14px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  min-width: 36px;
  text-align: right;
`

const Legend = styled.p`
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.subtle};
`

export default function ScoreChart({ items, thresholds, note }) {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <div ref={ref}>
      <List>
        {items.map((item, index) => {
          const grade = toGrade(item.score, thresholds)
          return (
            <Row key={item.name}>
              <RowHead>
                <Name>
                  <strong>{item.name}</strong>
                  <span>{item.text}</span>
                </Name>
                <Score>{inView ? item.score.toFixed(2) : '0.00'}</Score>
                <GradeTag grade={grade} />
              </RowHead>
              <Track role="img" aria-label={`위험 점수 ${item.score.toFixed(2)}, ${grade} 등급`}>
                <Fill $value={inView ? item.score : 0} $color={BAR_COLOR[grade]} $delay={index * 200} />
                <Marker $at={thresholds.medium} />
                <Marker $at={thresholds.high} />
              </Track>
            </Row>
          )
        })}
      </List>
      <Legend style={{ marginTop: 16 }}>
        세로선은 등급 경계(MEDIUM {thresholds.medium.toFixed(2)} · HIGH {thresholds.high.toFixed(2)})예요. {note}
      </Legend>
    </div>
  )
}
