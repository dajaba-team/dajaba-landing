import styled from 'styled-components'
import { DETECTION, INVESTIGATION } from '../data/content'
import ChatSample from './ChatSample'
import Reveal from './common/Reveal'
import SectionHead from './common/SectionHead'
import { Container, Section, Visual, VisualLabel } from './common/styles'
import FeatureRow from './FeatureRow'
import ScoreChart from './ScoreChart'

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
`

const Similar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.line};
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.body};
  }
`

function ScoreSample() {
  return (
    <Visual aria-label={DETECTION.sampleLabel}>
      <VisualLabel>{DETECTION.sampleLabel}</VisualLabel>
      <ScoreChart items={DETECTION.sampleAlerts} thresholds={DETECTION.thresholds} note={DETECTION.sampleNote} />
    </Visual>
  )
}

function QuestionPanelSample() {
  return (
    <Visual aria-label={INVESTIGATION.sampleLabel}>
      <VisualLabel>{INVESTIGATION.sampleLabel}</VisualLabel>
      <ChatSample
        question={INVESTIGATION.question}
        answer={INVESTIGATION.answer}
        action={INVESTIGATION.answerAction}
      />
      <Similar>
        <VisualLabel>{INVESTIGATION.similarTitle}</VisualLabel>
        <span>{INVESTIGATION.similarText}</span>
      </Similar>
    </Visual>
  )
}

export default function Features() {
  return (
    <Section id="features" $tone="surface">
      <Container>
        <Reveal>
          <SectionHead eyebrow="FEATURES" title="조사역의 하루를 이렇게 바꿔요" />
        </Reveal>
        <Rows>
          <Reveal>
            <FeatureRow
              badge={DETECTION.badge}
              title={DETECTION.title}
              paragraphs={DETECTION.paragraphs}
              visual={<ScoreSample />}
            />
          </Reveal>
          <Reveal>
            <FeatureRow
              reverse
              badge={INVESTIGATION.badge}
              title={INVESTIGATION.title}
              paragraphs={INVESTIGATION.paragraphs}
              visual={<QuestionPanelSample />}
            />
          </Reveal>
        </Rows>
      </Container>
    </Section>
  )
}
