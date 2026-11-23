import styled from 'styled-components'
import { TEAM } from '../data/content'
import { Container, Eyebrow, Section } from './common/styles'

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
`

const Names = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`

const Name = styled.li`
  font-size: 20px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 999px;
  padding: 12px 24px;
`

export default function Team() {
  return (
    <Section id="team">
      <Inner>
        <Eyebrow>{TEAM.eyebrow}</Eyebrow>
        <Names>
          {TEAM.members.map((name) => (
            <Name key={name}>{name}</Name>
          ))}
        </Names>
      </Inner>
    </Section>
  )
}
