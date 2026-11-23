import styled from 'styled-components'
import { STR_REPORT } from '../data/content'
import { useInView } from '../hooks/useInView'
import CheckList from './CheckList'
import Reveal from './common/Reveal'
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
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  transform: scale(${({ $shown }) => ($shown ? 1 : 0.94)});
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
  transition-delay: ${({ $delay }) => $delay}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }

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
  height: 100%;
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

// 7개 항목이 하나씩 채워지듯 나타나요.
function StrSectionsSample() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <Visual $tone="surface" aria-label={STR_REPORT.sectionsLabel}>
      <VisualLabel>{STR_REPORT.sectionsLabel}</VisualLabel>
      <SectionGrid ref={ref}>
        {STR_REPORT.sections.map((item, index) => (
          <SectionCard key={item.name} $highlight={item.highlight} $shown={inView} $delay={index * 140}>
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
          <Reveal>
            <FeatureRow
              badge={STR_REPORT.badge}
              title={STR_REPORT.title}
              paragraphs={STR_REPORT.paragraphs}
              visual={<StrSectionsSample />}
            />
          </Reveal>
          <div>
            <Reveal>
              <CheckTitle>{STR_REPORT.checkTitle}</CheckTitle>
            </Reveal>
            <CheckGrid>
              <Reveal>
                <CheckCard>
                  <CheckLabel>{codeCheck.label}</CheckLabel>
                  <CheckHeading>{codeCheck.title}</CheckHeading>
                  <CheckText>{codeCheck.text}</CheckText>
                </CheckCard>
              </Reveal>
              <Reveal delay={150}>
                <CheckCard>
                  <CheckLabel>{aiCheck.label}</CheckLabel>
                  <CheckHeading>{aiCheck.title}</CheckHeading>
                  <CheckList items={aiCheck.criteria} stepMs={260} />
                </CheckCard>
              </Reveal>
            </CheckGrid>
          </div>
        </Stack>
      </Container>
    </Section>
  )
}
