import styled from 'styled-components'
import { OVERVIEW } from '../data/content'
import SectionHead from './common/SectionHead'
import { Container, Section } from './common/styles'

const Steps = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
`

const Step = styled.li`
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 18px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:last-child {
    background: ${({ theme }) => theme.color.ink};
    border-color: ${({ theme }) => theme.color.ink};
    color: ${({ theme }) => theme.color.white};
  }
`

const StepNo = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.primary};

  ${Step}:last-child & {
    color: #9db8ff;
  }
`

const StepTitle = styled.strong`
  font-size: 18px;
`

const StepText = styled.span`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.muted};

  ${Step}:last-child & {
    color: ${({ theme }) => theme.color.onDark};
  }
`

export default function Overview() {
  return (
    <Section id="overview">
      <Container>
        <SectionHead eyebrow={OVERVIEW.eyebrow} title={OVERVIEW.title} description={OVERVIEW.description} />
        <Steps>
          {OVERVIEW.steps.map((step, index) => (
            <Step key={step.title}>
              <StepNo>STEP {index + 1}</StepNo>
              <StepTitle>{step.title}</StepTitle>
              <StepText>{step.text}</StepText>
            </Step>
          ))}
        </Steps>
      </Container>
    </Section>
  )
}
