import { FC, ReactNode } from 'react';
import Container from 'react-bootstrap/Container';

import { Header } from '.';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

export default Layout;
