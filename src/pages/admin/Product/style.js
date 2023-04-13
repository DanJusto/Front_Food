import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;

  > main {
    display: flex;
    flex-direction: column;
    padding: 15rem 0 7.7rem;
    margin: 0 5.6rem;
    gap: 1.6rem;
    width: 32rem;

    button {
    font-size: 24px;
    line-height: 140%;
    }
  }

  @media screen and (min-width: 900px) {
    > main {
      width: fit-content;
      margin: 0 12.5rem;

        
      button:first-child {
        font-weight: 700;
        margin-bottom: 5rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5.4rem;
  align-items: center;
  gap: 1.6rem;

  > img {
    width: 26.4rem;
    height: 26.4rem;
    align-self: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2, p {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 2.7rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-weight: 400;
      font-size: 1.6rem;
      text-align: center;
      margin: 2.4rem 0 2.8rem;
    }

    .tags {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;
      flex-wrap: wrap;
    }

    button {
      margin-top: 4.8rem;
      display: flex;
      padding: 1.2rem 2.4rem;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    gap: 5rem;

    > img {
      width: 39rem;
      height: 39rem;
    }

    > div {
      min-width: 36rem;
      align-items: flex-start;

      h2 {
        font-size: 4rem;
      }

      p {
        text-align: start;
        font-size: 2.4rem;
        line-height: 140%;
      }

      .tags {
        justify-content: flex-start;
        gap: 1.2rem;
        flex-wrap: wrap;
      }

      button:last-child {
        font-size: 1.4rem;
        line-height: 2.4rem;
        padding: 1.2rem 2.4rem;
        width: auto;
      }
    }
  }
`;