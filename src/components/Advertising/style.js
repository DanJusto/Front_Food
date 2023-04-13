import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  background: linear-gradient(${({ theme }) => theme.COLORS.GRADIENT_200});
  border-radius: 0.5rem;

  > img {
    width: 55%;
    height: 125%;
    margin-bottom: 3rem;
    margin-left: -3.5rem;
  }

  > .text {
    margin-left: -1rem;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    h1 {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 140%;
    }

    p {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 140%;
    }
  }

  @media screen and (min-width: 900px){
    height: clamp(20rem, 20rem + 5vh, 26rem);
    border-radius: 0.8rem;
    max-width: 112rem;

    > img {
      position: absolute;
      width: clamp(45rem, 55%, 55%);
      height: auto;
      bottom: -3rem;
      left: -3.5rem;
    }

    > .text {
      display: flex;
      flex-direction: column;
      margin-left: 52%;
      padding-right: 2rem;
      gap: 2rem;

      h1 {
        font-weight: 500;
        font-size: 4rem;
        line-height: 100%;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
      }
    }
  }
`