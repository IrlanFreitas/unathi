import React from "react";
import * as S from "./styles";

import Header from "../Header";
import Content from "../Content";
import Aside from "../Aside";

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <Aside />
      <Content>{children}</Content>
    </S.Container>
  );
};

export default Layout;
