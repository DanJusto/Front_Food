import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  align-items: center;
  padding: 5.6rem 2.8rem 2.4rem;
  gap: 1.6rem;

  > img {
    cursor: pointer;
    transition: filter 0.2s;
  }

  > img:hover {
    filter: brightness(0.7);
  }

  > h1 {
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 2.5rem;
  }
`;