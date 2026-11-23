import styled from 'styled-components'
import MultiLine from './common/MultiLine'
import { Badge } from './common/styles'

const Row = styled.div`
  display: flex;
  flex-wrap: ${({ $reverse }) => ($reverse ? 'wrap-reverse' : 'wrap')};
  align-items: center;
  gap: 48px;
`

const Copy = styled.div`
  flex: 1 1 440px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Heading = styled.h3`
  font-size: 30px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: -0.6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 26px;
  }
`

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: ${({ theme }) => theme.color.body};
`

// 글 쪽과 그림 쪽을 나란히 놓는 기능 소개 한 줄
export default function FeatureRow({ badge, title, paragraphs, visual, reverse = false }) {
  const copy = (
    <Copy>
      <Badge>{badge}</Badge>
      <Heading>
        <MultiLine lines={title} />
      </Heading>
      {paragraphs.map((text) => (
        <Paragraph key={text}>{text}</Paragraph>
      ))}
    </Copy>
  )

  return (
    <Row $reverse={reverse}>
      {reverse ? visual : copy}
      {reverse ? copy : visual}
    </Row>
  )
}
