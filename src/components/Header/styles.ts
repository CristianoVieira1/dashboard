import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  position: relative;
  justify-content: end;
  align-items: center;
  align-items: center;
  padding: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 3px 8px;
`;

export const Profile = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
