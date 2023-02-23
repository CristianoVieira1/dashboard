import { Container } from './styles'

interface IContentProps {
  children: React.ReactNode
}

const Content = ({ children }: IContentProps) => (
  <Container>{children}</Container>
)

export default Content
