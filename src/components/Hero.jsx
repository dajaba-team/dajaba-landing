import styled from 'styled-components'
import bearTelescope from '../assets/bear-telescope.png'
import { HERO, LINKS, PROJECT_LABEL } from '../data/content'
import MultiLine from './common/MultiLine'
import { Container } from './common/styles'

const Wrap = styled.section`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`

const Inner = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  padding-top: 88px;
`

const Copy = styled.div`
  flex: 1 1 520px;
  min-width: 0;
  padding-bottom: 88px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Label = styled.span`
  align-self: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 14px;
`

const Heading = styled.h1`
  font-size: 60px;
  line-height: 1.22;
  font-weight: 700;
  letter-spacing: -1.5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 40px;
  }
`

const Description = styled.p`
  font-size: 19px;
  line-height: 1.7;
  max-width: 580px;
  opacity: 0.95;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 26px;
  border-radius: 999px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`

const GhostButton = styled(PrimaryButton)`
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background: rgba(255, 255, 255, 0.12);
  }
`

const Character = styled.img`
  display: block;
  flex: 0 1 360px;
  width: 360px;
  height: auto;
`

export default function Hero() {
  return (
    <Wrap id="top">
      <Inner>
        <Copy>
          <Label>{PROJECT_LABEL}</Label>
          <Heading>
            <MultiLine lines={HERO.title} />
          </Heading>
          <Description>{HERO.description}</Description>
          <Actions>
            <PrimaryButton href="#overview">어떻게 동작하나요</PrimaryButton>
            <GhostButton href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub 보러 가기
            </GhostButton>
          </Actions>
        </Copy>
        <Character src={bearTelescope} alt="망원경을 보는 신한은행 캐릭터" width="444" height="465" />
      </Inner>
    </Wrap>
  )
}
