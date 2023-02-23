import * as S from './styles';

interface IBoxProps {
  children: React.ReactNode;
}

export const Box = ({ children, ...rest }: IBoxProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
