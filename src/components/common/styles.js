import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.layout.gutter};
  padding-right: ${({ theme }) => theme.layout.gutter};
`

export const Section = styled.section`
  background: ${({ $tone, theme }) =>
    $tone === 'surface' ? theme.color.surface : $tone === 'primary' ? theme.color.primary : theme.color.white};
  color: ${({ $tone, theme }) => ($tone === 'primary' ? theme.color.white : theme.color.ink)};
  padding: 96px 0;
  scroll-margin-top: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 64px 0;
  }
`


export const Eyebrow = styled.span`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ $onDark, theme }) => ($onDark ? theme.color.white : theme.color.primary)};
  opacity: ${({ $onDark }) => ($onDark ? 0.9 : 1)};
`

export const Title = styled.h2`
  font-size: 38px;
  line-height: 1.35;
  font-weight: 700;
  letter-spacing: -1px;
  text-wrap: balance;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 30px;
  }
`

export const Lead = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${({ $onDark, theme }) => ($onDark ? theme.color.white : theme.color.muted)};
  max-width: 720px;
`


export const Badge = styled.span`
  align-self: flex-start;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: 700;
  border-radius: 999px;
  padding: 6px 16px;
`

// 기능 소개 옆에 놓는 화면 예시 상자
export const Visual = styled.div`
  flex: 1 1 400px;
  min-width: 0;
  background: ${({ $tone, theme }) => ($tone === 'surface' ? theme.color.surface : theme.color.white)};
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const VisualLabel = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.subtle};
`
