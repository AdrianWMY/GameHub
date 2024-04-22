import { ReactNode } from 'react';
import Topbar from './components/ui/Topbar';
import Footer from './components/ui/Footer';
import Overlay from './components/Overlay';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
      <Overlay />
    </>
  );
};

export default Layout;
