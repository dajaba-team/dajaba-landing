import styled from 'styled-components'
import { useInView } from '../../hooks/useInView'

const Box = styled.div`
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  transform: translateY(${({ $shown }) => ($shown ? '0' : '24px')});
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: ${({ $delay }) => $delay}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

// 화면에 들어오면 아래에서 살짝 떠오르며 나타나는 감싸개
export default function Reveal({ children, delay = 0, as, className }) {
  const [ref, inView] = useInView()

  return (
    <Box ref={ref} as={as} className={className} $shown={inView} $delay={delay}>
      {children}
    </Box>
  )
}
