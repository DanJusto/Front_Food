import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.8rem;

  > select {
    padding: 1.6rem 1.4rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;
    border: 0;
    font-weight: 400;
    line-height: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;
  }
`;