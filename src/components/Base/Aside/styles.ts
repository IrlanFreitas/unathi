import styled from "styled-components";

export const Container = styled.aside`
    grid-area: aside;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.white};
    /* height: 100%; */
`;