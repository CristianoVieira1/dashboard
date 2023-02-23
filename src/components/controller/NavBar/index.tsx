import * as Icons from 'react-icons/fa'
import * as S from './styles'

export const NavBar = () => {
  return (
    <S.Nav>
      <S.Content>
        <S.List>
          <Icons.FaHome color="#fff" width={54} height={54} />
          <S.Link to={''}>Home</S.Link>
        </S.List>
        <S.List>
          <Icons.FaHome color="#fff" width={54} height={54} />
          <S.Link to={''}>Serviços</S.Link>
        </S.List>
        <S.List>
          <Icons.FaHome color="#fff" width={54} height={54} />
          <S.Link to={''}>Dashboard</S.Link>
        </S.List>
        <S.List>
          <Icons.FaHome color="#fff" width={54} height={54} />
          <S.Link to={''}>Colunas</S.Link>
        </S.List>
      </S.Content>
    </S.Nav>
  )
}
