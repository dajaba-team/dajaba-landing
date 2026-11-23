import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'

const TYPE_SPEED_MS = 28
const THINK_MS = 900

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`

const appear = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
`

const Bubble = styled.div`
  max-width: 88%;
  padding: 12px 16px;
  font-size: 15px;
  line-height: 1.6;
  border-radius: ${({ $mine }) => ($mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px')};
  align-self: ${({ $mine }) => ($mine ? 'flex-end' : 'flex-start')};
  background: ${({ $mine, theme }) => ($mine ? theme.color.primary : '#F3F5FA')};
  color: ${({ $mine, theme }) => ($mine ? theme.color.white : theme.color.ink)};
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${appear} 0.4s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const Dots = styled.span`
  display: inline-flex;
  gap: 4px;

  i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.subtle};
    animation: ${blink} 1.2s infinite;
  }

  i:nth-child(2) {
    animation-delay: 0.2s;
  }

  i:nth-child(3) {
    animation-delay: 0.4s;
  }
`

const Chip = styled.span`
  align-self: flex-start;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primaryTint};
  border-radius: 999px;
  padding: 4px 10px;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 190px;
`

// 질문 → 생각 중 → 답이 한 글자씩 써지는 질문 패널 예시
export default function ChatSample({ question, answer, action }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const reduced = useReducedMotion()
  const [typed, setTyped] = useState(0)
  const [thinking, setThinking] = useState(true)
  const done = reduced || typed >= answer.length

  useEffect(() => {
    if (!inView || reduced) return undefined
    if (thinking) {
      const timer = setTimeout(() => setThinking(false), THINK_MS)
      return () => clearTimeout(timer)
    }
    if (typed >= answer.length) return undefined
    const timer = setTimeout(() => setTyped((n) => n + 1), TYPE_SPEED_MS)
    return () => clearTimeout(timer)
  }, [inView, reduced, thinking, typed, answer.length])

  return (
    <Stack ref={ref} aria-live="polite">
      {(inView || reduced) && <Bubble $mine>{question}</Bubble>}
      {inView && !reduced && thinking && (
        <Bubble aria-label="답변 작성 중">
          <Dots>
            <i />
            <i />
            <i />
          </Dots>
        </Bubble>
      )}
      {(reduced || (inView && !thinking)) && (
        <Bubble>
          <span>{reduced ? answer : answer.slice(0, typed)}</span>
          {done && <Chip>{action}</Chip>}
        </Bubble>
      )}
    </Stack>
  )
}
