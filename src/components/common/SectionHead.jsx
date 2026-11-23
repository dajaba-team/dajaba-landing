import styled from 'styled-components'
import { Eyebrow, Lead, Title } from './styles'

const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  margin-bottom: 44px;
`

export default function SectionHead({ eyebrow, title, description }) {
  return (
    <HeadWrap>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {description && <Lead>{description}</Lead>}
    </HeadWrap>
  )
}
