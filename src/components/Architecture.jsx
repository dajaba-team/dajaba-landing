import styled from 'styled-components'
import { ARCHITECTURE } from '../data/content'
import Reveal from './common/Reveal'
import SectionHead from './common/SectionHead'
import { Container, Section } from './common/styles'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`

const VideoWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 24px;
  border-radius: 20px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

const Block = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  height: 100%;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
  }

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
        <Reveal>
          <SectionHead
            eyebrow={ARCHITECTURE.eyebrow}
            title={ARCHITECTURE.title}
            description={ARCHITECTURE.description}
          />
        </Reveal>
        <Reveal>
          <VideoWrap>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ARCHITECTURE.videoId}`}
              title={ARCHITECTURE.videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </VideoWrap>
        </Reveal>
        <Grid>
          {ARCHITECTURE.blocks.map((block, index) => (
            <Reveal key={block.name} delay={index * 100}>
              <Block>
                <strong>{block.name}</strong>
                <Stack>{block.stack}</Stack>
                <Text>{block.text}</Text>
              </Block>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
