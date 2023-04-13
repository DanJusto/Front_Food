import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  gap: 0.8rem;
  transition: 300ms;

  > svg {
    width: 2rem;
    height: auto;
  }

  &:hover {
    background: ${({ theme }) => theme.COLORS.RED_400};
  }
`;