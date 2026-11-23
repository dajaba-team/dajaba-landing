import styled from 'styled-components'
import { useInView } from '../hooks/useInView'
import { CheckCircleIcon } from './icons'

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ $variant }) => ($variant === 'pill' ? '12px' : '8px')};
`

const Item = styled.li`
  display: flex;
  align-items: ${({ $variant }) => ($variant === 'pill' ? 'center' : 'flex-start')};
  gap: ${({ $variant }) => ($variant === 'pill' ? '12px' : '10px')};
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.body};
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  transform: translateX(${({ $shown }) => ($shown ? '0' : '-12px')});
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  transition-delay: ${({ $delay }) => $delay}ms;

  ${({ $variant, theme }) =>
    $variant === 'pill' &&
    `
    background: ${theme.color.white};
    color: ${theme.color.ink};
    border-radius: 999px;
    padding: 14px 20px;
    font-weight: 500;
  `}

  svg {
    margin-top: ${({ $variant }) => ($variant === 'pill' ? '0' : '3px')};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

// variant: 'plain'(흰 바탕용 목록) | 'pill'(파란 바탕 위 흰 알약 목록)
// 화면에 들어오면 항목이 하나씩 체크되며 나타나요.
export default function CheckList({ items, variant = 'plain', stepMs = 180 }) {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <List ref={ref} $variant={variant}>
      {items.map((text, index) => (
        <Item key={text} $variant={variant} $shown={inView} $delay={index * stepMs}>
          <CheckCircleIcon size={variant === 'pill' ? 24 : 20} />
          {text}
        </Item>
      ))}
    </List>
  )
}
