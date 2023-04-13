import styled from "styled-components";

export const Container = styled.div`
  width: min-content;
  display: flex;
  
  > img {
    width: 1.6rem;
    height: auto;
    cursor: pointer;
    transition: filter 0.2s;
  }

  > img:hover {
    filter: brightness(0.7);
  }

  > div {
    background-color: transparent;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 160%;

    input {
      margin-left: 0.8rem;
      width: 6.5rem;
      text-align: center;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    input::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }
  }
`;