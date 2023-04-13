import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.8rem;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    min-width: 14.2rem;
    gap: 0.6rem;

    svg {
      height: 2rem;
    }
 
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: 'DM Sans', sans-serif;
  }

  @media screen and (min-width: 900px) {
    padding: 0 9.5rem;

    > div {
      gap: 1.1rem;

      svg {
        height: 3rem;
      }

      h3 {
        font-size: 2.4rem;
        line-height: 2.8rem;
      }
    }

    > p {
      font-size: 1.4rem;
      line-height: 160%;
    }
  }
`;