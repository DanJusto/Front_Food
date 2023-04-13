import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
  padding: 15rem 2.8rem 9.7rem;

  div button {
    width: 100%;
    font-weight: 300;
    font-size: 24px;
    line-height: 140%;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .itens div {
    margin-bottom: 0.5rem;
  }
`;