import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  height: 50%;
  border-radius: 0.9rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
