import styled from 'styled-components'
import bearSuperSol from '../assets/bear-super-sol.png'
import { ROLES } from '../data/content'
import { Container, Eyebrow, Lead, Section, Title } from './common/styles'

const Inner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
`

const Copy = styled.div`
  flex: 1 1 520px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const RoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
`

const RoleCard = styled.div`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.ink};
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    font-size: 18px;
  }

  span {
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.muted};
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Tag = styled.span`
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 14px;
`

const Character = styled.img`
  display: block;
  flex: 0 1 320px;
  width: 320px;
  height: auto;
`

export default function Roles() {
  return (
    <Section id="roles" $tone="primary">
      <Inner>
        <Copy>
          <Head>
            <Eyebrow $onDark>{ROLES.eyebrow}</Eyebrow>
            <Title>{ROLES.title}</Title>
            <Lead $onDark>{ROLES.description}</Lead>
          </Head>
          <RoleGrid>
            {ROLES.roles.map((role) => (
              <RoleCard key={role.name}>
                <strong>{role.name}</strong>
                <span>{role.text}</span>
              </RoleCard>
            ))}
          </RoleGrid>
          <Tags>
            {ROLES.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </Copy>
        <Character src={bearSuperSol} alt="슈퍼 SOL 옷을 입은 신한은행 캐릭터" width="1254" height="1254" />
      </Inner>
    </Section>
  )
}
