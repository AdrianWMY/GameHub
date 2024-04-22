import { ReactNode } from 'react';
import Topbar from './components/ui/Topbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default Layout;
