import styled from 'styled-components'
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
`

// variant: 'plain'(흰 바탕용 목록) | 'pill'(파란 바탕 위 흰 알약 목록)
export default function CheckList({ items, variant = 'plain' }) {
  return (
    <List $variant={variant}>
      {items.map((text) => (
        <Item key={text} $variant={variant}>
          <CheckCircleIcon size={variant === 'pill' ? 24 : 20} />
          {text}
        </Item>
      ))}
    </List>
  )
}
