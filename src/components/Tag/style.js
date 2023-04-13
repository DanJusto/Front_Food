import styled from "styled-components";

export const Container = styled.div`
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;