import styled from 'styled-components'
import { LINKS, NAV_ITEMS } from '../data/content'
import { GrabIcon } from './icons'
import { Container } from './common/styles'

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
`

const Nav = styled(Container).attrs({ as: 'nav' })`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.5px;
`

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  font-size: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 14px;
  }
`

const MenuLink = styled.a`
  color: ${({ theme }) => theme.color.body};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  background: ${({ theme }) => theme.color.ink};
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    opacity: 0.85;
  }
`

export default function Header() {
  return (
    <Bar>
      <Nav>
        <Logo href="#top">
          <GrabIcon />
          다자바
        </Logo>
        <Menu>
          {NAV_ITEMS.map((item) => (
            <MenuLink key={item.href} href={item.href}>
              {item.label}
            </MenuLink>
          ))}
          <GithubButton href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </GithubButton>
        </Menu>
      </Nav>
    </Bar>
  )
}
