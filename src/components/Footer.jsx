import styled from 'styled-components'
import { FOOTER, LINKS, PROJECT_LABEL } from '../data/content'
import { Container } from './common/styles'

const Wrap = styled.footer`
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.onDark};
`

const Inner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 48px;
  padding-bottom: 48px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: ${({ $end }) => ($end ? 'flex-end' : 'flex-start')};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: flex-start;
  }
`

const Brand = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.white};
`

const Small = styled.span`
  font-size: 14px;
`

const GithubLink = styled.a`
  color: ${({ theme }) => theme.color.white};
  font-size: 15px;

  &:hover {
    color: ${({ theme }) => theme.color.primaryTint};
  }
`

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <Column>
          <Brand>다자바</Brand>
          <Small>{PROJECT_LABEL}</Small>
        </Column>
        <Column $end>
          <GithubLink href={LINKS.github} target="_blank" rel="noreferrer">
            github.com/dajaba-team
          </GithubLink>
          <Small>{FOOTER.note}</Small>
        </Column>
      </Inner>
    </Wrap>
  )
}
