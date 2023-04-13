import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;