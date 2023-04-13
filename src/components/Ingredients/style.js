import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    border-radius: 0.8rem;
    padding-right: 1.6rem;

    > button {
        font-size: 2.1rem;
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    > input {
        height: 3.2rem;
        size: 6;
        padding-left: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        outline:none;


        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`;