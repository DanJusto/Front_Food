import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;

  > main {
    width: 42.8rem;
    padding: 15.8rem 2.4rem 7.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 900px){
    > main {
      width: 100%;
      padding: 26rem 10.4rem 7.7rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 6.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 2.4rem;
`;