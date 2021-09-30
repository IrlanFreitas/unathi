import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    background-color: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.white};
`;