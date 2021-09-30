import styled from "styled-components";

export const Container = styled.main`
    grid-area: content;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    /* border: 1px solid white; */
`;

