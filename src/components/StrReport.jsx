import styled from 'styled-components'
import { STR_REPORT } from '../data/content'
import CheckList from './CheckList'
import { Container, Section, Visual, VisualLabel } from './common/styles'
import FeatureRow from './FeatureRow'

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`

const SectionCard = styled.div`
  background: ${({ $highlight, theme }) => ($highlight ? theme.color.primary : theme.color.white)};
  color: ${({ $highlight, theme }) => ($highlight ? theme.color.white : theme.color.ink)};
  grid-column: ${({ $highlight }) => ($highlight ? '1 / -1' : 'auto')};
  border-radius: 12px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    font-size: 15px;
  }

  span {
    font-size: 13px;
    opacity: ${({ $highlight }) => ($highlight ? 0.9 : 1)};
    color: ${({ $highlight, theme }) => ($highlight ? theme.color.white : theme.color.subtle)};
  }
`

const CheckTitle = styled.h3`
  font-size: 26px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: center;
  margin-bottom: 24px;
`

const CheckGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`

const CheckCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 22px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const CheckLabel = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.primary};
`

const CheckHeading = styled.strong`
  font-size: 20px;
`

const CheckText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.muted};
`

function StrSectionsSample() {
  return (
    <Visual $tone="surface" aria-label={STR_REPORT.sectionsLabel}>
      <VisualLabel>{STR_REPORT.sectionsLabel}</VisualLabel>
      <SectionGrid>
        {STR_REPORT.sections.map((item) => (
          <SectionCard key={item.name} $highlight={item.highlight}>
            <strong>{item.name}</strong>
            <span>{item.question}</span>
          </SectionCard>
        ))}
      </SectionGrid>
    </Visual>
  )
}

export default function StrReport() {
  const { codeCheck, aiCheck } = STR_REPORT

  return (
    <Section id="str">
      <Container>
        <Stack>
          <FeatureRow
            badge={STR_REPORT.badge}
            title={STR_REPORT.title}
            paragraphs={STR_REPORT.paragraphs}
            visual={<StrSectionsSample />}
          />
          <div>
            <CheckTitle>{STR_REPORT.checkTitle}</CheckTitle>
            <CheckGrid>
              <CheckCard>
                <CheckLabel>{codeCheck.label}</CheckLabel>
                <CheckHeading>{codeCheck.title}</CheckHeading>
                <CheckText>{codeCheck.text}</CheckText>
              </CheckCard>
              <CheckCard>
                <CheckLabel>{aiCheck.label}</CheckLabel>
                <CheckHeading>{aiCheck.title}</CheckHeading>
                <CheckList items={aiCheck.criteria} />
              </CheckCard>
            </CheckGrid>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
