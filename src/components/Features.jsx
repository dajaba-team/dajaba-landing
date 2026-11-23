import styled from 'styled-components'
import { DETECTION, INVESTIGATION } from '../data/content'
import SectionHead from './common/SectionHead'
import { Container, Section, Visual, VisualLabel } from './common/styles'
import FeatureRow from './FeatureRow'
import GradeTag from './GradeTag'

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
`

const AlertItem = styled.div`
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

const AlertText = styled.div`
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

function AlertListSample() {
  return (
    <Visual aria-label={DETECTION.sampleLabel}>
      <VisualLabel>{DETECTION.sampleLabel}</VisualLabel>
      {DETECTION.sampleAlerts.map((alert) => (
        <AlertItem key={alert.name}>
          <AlertText>
            <strong>{alert.name}</strong>
            <span>{alert.text}</span>
          </AlertText>
          <GradeTag grade={alert.grade} />
        </AlertItem>
      ))}
    </Visual>
  )
}

function QuestionPanelSample() {
  return (
    <Visual aria-label={INVESTIGATION.sampleLabel}>
      <VisualLabel>{INVESTIGATION.sampleLabel}</VisualLabel>
      <Bubble $mine>{INVESTIGATION.question}</Bubble>
      <Bubble>
        <span>{INVESTIGATION.answer}</span>
        <Chip>{INVESTIGATION.answerAction}</Chip>
      </Bubble>
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
        <SectionHead eyebrow="FEATURES" title="조사역의 하루를 이렇게 바꿔요" />
        <Rows>
          <FeatureRow
            badge={DETECTION.badge}
            title={DETECTION.title}
            paragraphs={DETECTION.paragraphs}
            visual={<AlertListSample />}
          />
          <FeatureRow
            reverse
            badge={INVESTIGATION.badge}
            title={INVESTIGATION.title}
            paragraphs={INVESTIGATION.paragraphs}
            visual={<QuestionPanelSample />}
          />
        </Rows>
      </Container>
    </Section>
  )
}
