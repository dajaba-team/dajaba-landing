import styled, { keyframes } from 'styled-components'
import { useReducedMotion } from '../hooks/useReducedMotion'

// 여러 계좌의 돈이 한 계좌로 몰리는 '집중 입금' 모양을 그린 장식 그래프
const CENTER = { x: 210, y: 170 }
const SOURCES = [
  { x: 50, y: 50 },
  { x: 190, y: 24 },
  { x: 345, y: 60 },
  { x: 30, y: 200 },
  { x: 380, y: 210 },
  { x: 90, y: 310 },
]

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.6); opacity: 0; }
`

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;

  .ring {
    transform-box: fill-box;
    transform-origin: center;
    animation: ${pulse} 2.4s ease-out infinite;
  }

  .ring.late {
    animation-delay: 1.2s;
  }

  @media (prefers-reduced-motion: reduce) {
    .ring {
      animation: none;
      opacity: 0;
    }
  }
`

export default function FlowGraph({ caption }) {
  const reduced = useReducedMotion()

  return (
    <Svg viewBox="0 0 420 340" role="img" aria-label={caption}>
      {SOURCES.map((s, i) => {
        const id = `flow-${i}`
        return (
          <g key={id}>
            <path
              id={id}
              d={`M${s.x} ${s.y} L${CENTER.x} ${CENTER.y}`}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              fill="none"
            />
            <circle cx={s.x} cy={s.y} r="11" fill="rgba(255,255,255,0.16)" stroke="#fff" strokeWidth="1.5" />
            {!reduced && (
              <circle r="4.5" fill="#FFD84D">
                <animateMotion dur={`${2.2 + (i % 3) * 0.4}s`} begin={`${i * 0.35}s`} repeatCount="indefinite">
                  <mpath href={`#${id}`} />
                </animateMotion>
              </circle>
            )}
          </g>
        )
      })}
      <circle className="ring" cx={CENTER.x} cy={CENTER.y} r="26" fill="none" stroke="#FFD84D" strokeWidth="2" />
      <circle className="ring late" cx={CENTER.x} cy={CENTER.y} r="26" fill="none" stroke="#FFD84D" strokeWidth="2" />
      <circle cx={CENTER.x} cy={CENTER.y} r="26" fill="#fff" />
      <text
        x={CENTER.x}
        y={CENTER.y + 5}
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#0046FF"
      >
        경보
      </text>
    </Svg>
  )
}
