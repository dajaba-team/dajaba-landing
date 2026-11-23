import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { OVERVIEW } from '../data/content'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Reveal from './common/Reveal'
import SectionHead from './common/SectionHead'
import { Container, Section } from './common/styles'

const AUTO_PLAY_MS = 2600

const Progress = styled.div`
  height: 6px;
  border-radius: 999px;
  background: ${({ theme }) => theme.color.line};
  margin-bottom: 20px;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $ratio }) => $ratio * 100}%;
  background: ${({ theme }) => theme.color.primary};
  border-radius: inherit;
  transition: width 0.6s ease;
`

const Steps = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
`

const StepButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  font: inherit;
  cursor: pointer;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.primary : theme.color.line)};
  background: ${({ $active, theme }) => ($active ? theme.color.primary : theme.color.white)};
  color: ${({ $active, theme }) => ($active ? theme.color.white : theme.color.ink)};
  border-radius: 18px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateY(${({ $active }) => ($active ? '-4px' : '0')});
  box-shadow: ${({ $active }) => ($active ? '0 14px 30px rgba(0, 70, 255, 0.25)' : 'none')};
  transition:
    background 0.35s ease,
    color 0.35s ease,
    transform 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.primaryTint};
    outline-offset: 2px;
  }
`

const StepNo = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: ${({ $active, theme }) => ($active ? theme.color.primaryTint : theme.color.primary)};
`

const StepTitle = styled.strong`
  font-size: 18px;
`

const StepText = styled.span`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ $active, theme }) => ($active ? theme.color.white : theme.color.muted)};
  opacity: ${({ $active }) => ($active ? 0.95 : 1)};
`

const Hint = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.subtle};
  text-align: center;
`

export default function Overview() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = OVERVIEW.steps.length

  // 화면에 보이는 동안 단계를 하나씩 자동으로 넘겨요. 직접 누르면 멈춰요.
  useEffect(() => {
    if (!inView || paused || reduced) return undefined
    const timer = setInterval(() => setActive((prev) => (prev + 1) % total), AUTO_PLAY_MS)
    return () => clearInterval(timer)
  }, [inView, paused, reduced, total])

  const select = (index) => {
    setActive(index)
    setPaused(true)
  }

  return (
    <Section id="overview">
      <Container ref={ref}>
        <Reveal>
          <SectionHead eyebrow={OVERVIEW.eyebrow} title={OVERVIEW.title} description={OVERVIEW.description} />
        </Reveal>
        <Progress aria-hidden="true">
          <ProgressFill $ratio={(active + 1) / total} />
        </Progress>
        <Steps>
          {OVERVIEW.steps.map((step, index) => {
            const isActive = index === active
            return (
              <li key={step.title}>
                <StepButton type="button" $active={isActive} aria-pressed={isActive} onClick={() => select(index)}>
                  <StepNo $active={isActive}>STEP {index + 1}</StepNo>
                  <StepTitle>{step.title}</StepTitle>
                  <StepText $active={isActive}>{step.text}</StepText>
                </StepButton>
              </li>
            )
          })}
        </Steps>
        <Hint>단계를 누르면 그 단계에서 멈춰요.</Hint>
      </Container>
    </Section>
  )
}
