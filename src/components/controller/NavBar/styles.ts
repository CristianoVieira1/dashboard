import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
`;

export const Content = styled.ul`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  gap: 0.5rem;
  padding: 0.5rem 0;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    transition: 0.5s ease-in-out;
  }
`;

export const Link = styled(LinkRouter)`
  color: ${({ theme }) => theme.colors.white};
  /* font-size: ${({ theme }) => theme.font.sizes.small}; */
  text-align: left;
  font-weight: 500;
  text-decoration: none;
  transition: 0.2s;
`;
