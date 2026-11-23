import styled from 'styled-components'
import { ARCHITECTURE } from '../data/content'
import SectionHead from './common/SectionHead'
import { Container, Section } from './common/styles'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`

const Block = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  strong {
    font-size: 18px;
  }
`

const Stack = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`

const Text = styled.span`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.muted};
`

export default function Architecture() {
  return (
    <Section $tone="surface">
      <Container>
        <SectionHead
          eyebrow={ARCHITECTURE.eyebrow}
          title={ARCHITECTURE.title}
          description={ARCHITECTURE.description}
        />
        <Grid>
          {ARCHITECTURE.blocks.map((block) => (
            <Block key={block.name}>
              <strong>{block.name}</strong>
              <Stack>{block.stack}</Stack>
              <Text>{block.text}</Text>
            </Block>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
