import styled from "styled-components";

/**
 ** Layout
 * header
 * aside
 * content
 */

export const Container = styled.div`
  display: grid;

  grid-template-columns: 250px auto;
  grid-template-rows: 80px auto;

  grid-template-areas:
    " aside header"
    " aside content";

  height: 100vh;
`;
