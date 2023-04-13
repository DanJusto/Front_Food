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
  justify-content: space-between;
  padding: 6rem 3.6rem 3.2rem 2.8rem;

  > #button-desktop, #logout {
    display: none;
  }

  > img {
    cursor: pointer;
    transition: filter 0.2s;
  }

  > img:hover {
    filter: brightness(0.7);
  }
  

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      height: 2.5rem;
      width: auto;
    }

    img:hover {
      animation: wiggle 2s linear infinite;
    }

    h1 {
      font-size: 2.1rem;
      line-height: 2.5rem;
    }

    div {
      display: none;
    }
  }

  > div:nth-child(4) {
    position: relative;

    div {
      position: absolute;
      top: -0.9rem;
      right: -0.9rem;
      width: 2rem;
      height: 2rem;
      background-color: ${({ theme }) => theme.COLORS.RED_100};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
    img {
      cursor: pointer;
      transition: filter 0.2s;
    }

    img:hover {
      filter: brightness(0.7);
    }
  }

  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }

  @media screen and (min-width: 900px) {
    height: 10.4rem;
    padding: 0 9.5rem;
    justify-content: center;
    gap: 4.5rem;

    > div:nth-child(4) {
      display: none;
    }

    > img:first-child {
      display: none;
    }

    > #button-desktop {
      max-width: 19rem;
      min-width: 19rem;
      display: flex;
      align-items: center;
      gap: 1.1rem;
      padding: 1.2rem 3.2rem;

      svg {
        margin-top: -0.3rem;
      }
    }

    > #logout {
      display: initial;
    }

    > div:nth-child(2) {
      min-width: 55rem;
      img {
        height: 3rem;
      }

      h1 {
        font-size: 2.4rem;
        line-height: 2.8rem;
        min-width: 15rem;
      }

      div {
        display: flex;
        margin-left: 4rem;
        width: clamp(32rem, 32rem + 30vw, 100rem);

        input {
          outline: none;
        }
      }
    }
  }
`;