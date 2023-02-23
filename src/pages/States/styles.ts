import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
`;
