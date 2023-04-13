import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 31.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: -10rem 0 7rem;

    h1 {
      font-weight: 700;
      font-size: 3.7rem;
      line-height: 4.4rem;
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    gap: clamp(10rem, 12vw, 30rem);
    padding: 0 1.5rem;

    > div {
      min-width: 32.4rem;
      margin-top: -3rem;
      gap: 2rem;

      img {
        width: 4.4rem;
        height: auto;
      }

      h1 {
        font-size: 4.2rem;
        line-height: 4.9rem;
      }
    }
  }
`;

export const Form = styled.form`
  width: 316px;

  > label {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div {
    margin: 0.8rem 0 3.2rem;
  }

  > button:last-child {
    display: flex;
    margin: 3.2rem auto 0;
  }

  @media screen and (min-width: 900px) {
    width: clamp(42rem, 47.6rem, 47.6rem);
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    padding: 6.4rem;
    margin-top: -1rem;

    label:first-child::before {
      content: "Crie sua conta";
      display: block;
      text-align: center;
      margin-bottom: 3.2rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;