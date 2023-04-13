import styled from "styled-components";

export const Container = styled.div`
  max-width: 43rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .item {
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    width: 21rem;
    height: 29.2rem;
    position: relative;

    > img:nth-child(1) {
      cursor: pointer;
      transition: filter 0.2s;
      filter: brightness(0.8);
    }

    > img:nth-child(1):hover {
      filter: brightness(0.6);
    }

    > img {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4.4rem 0;
      gap: 0.4rem;

      img {
        width: 8.8rem;
        height: 8.8rem;
      }

      button:nth-child(2) {
        width: 16.2rem;
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        margin: 1.2rem 0;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
        text-align: left;
        gap: 0.5rem;
      }

      h3 {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.BLUE_200};
      }

      p {
        display: none;
      }

      .step {
        display: flex;
        gap: 1rem;
      }

      .step div img {
      width: 1.4rem;
      height: auto;
      }

      .step div div input {
        margin-left: 0.2rem;
        width: 4.5rem;
        font-size: 1.4rem;
      }

      button:last-child {
        width: fit-content;
        line-height: 2.4rem;
        padding: 1rem 2rem;
      }
    }
  }

  @media screen and (min-width: 900px) {
    max-width: 93.5rem;

    .item {
      width: 30.4rem;
      height: 46.2rem;

      > div {
        gap: 1rem;

        img {
          width: 17.6rem;
          height: 17.6rem;
        }

        button:nth-child(2) {
          width: 25.2rem;
          font-weight: 700;
          font-size: 2.6rem;
          line-height: 140%;

          svg {
            margin-top: 0;
            margin-bottom: 0.2rem;
            width: 1rem;
            height: auto;
          }
        }

        p {
          display: initial;
          height: 2.2rem;
          width: 25.6rem;
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 160%;
          text-align: center;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .step {
          display: flex;
          gap: 1.8rem;
        }

        .step div img {
          width: 1.6rem;
          height: auto;
        }

        .step div div input {
          margin-left: 0.2rem;
          width: 6.5rem;
          font-size: 2rem;
        }

        h3 {
          font-size: 2.2rem;
          line-height: 160%;
        }

        button:last-child {
          width: auto;
          font-size: 1.6rem;
          line-height: 140%;
          padding: 1.6rem 3.4rem;
          gap: 1rem;
        }
      }
    }
  }
`;