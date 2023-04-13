import styled from "styled-components";

export const Container = styled.div`
  > svg {
    height: 2.2rem;
    width: auto;
    
    path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }
`;