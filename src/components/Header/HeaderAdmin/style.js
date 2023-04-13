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
  justify-content: center;
  padding: 6rem 3.6rem 3.2rem 2.8rem;

  > #button-desktop, #logout {
    display: none;
  }

  > #menu {
    position: absolute;
    top: 6.2rem;
    left: 2.8rem;
    cursor: pointer;
    transition: filter 0.2s;
  }

  > img:hover {
    filter: brightness(0.7);
  }
  

  > div {
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

    div {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      h1 {
        font-size: 2.1rem;
        line-height: 2.5rem;
      }
  
      span {
        margin-top: 0.3rem;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.BLUE_200};
      }
    }

    div:nth-child(3) {
      display: none;
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
    gap: 4.5rem;

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
    }

    > #logout {
      display: initial;
      cursor: pointer;
      transition: filter 0.2s;
    }

    > div:nth-child(2) {
      min-width: 55rem;
      
      img {
        height: 3rem;
      }

      div:nth-child(2)  {
        flex-direction: column;
        gap: 0;
        align-items: flex-end;
        justify-content: end;
        margin-top: 1.1rem;

        h1 {
          font-size: 2.4rem;
          line-height: 2.4rem;
          min-width: 15rem;
        }

        span {
          line-height: 100%;
          padding-right: 0.6rem;
        }
      }

      div:last-child {
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