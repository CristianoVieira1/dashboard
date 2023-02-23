import { Grid } from './styles'

import Aside from '../../Aside'
import Content from '../../Content'
import { Header } from '../../Header'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => (
  <Grid>
    <Header />
    <Aside />
    <Content>{children}</Content>
  </Grid>
)

export default Layout
