import { ReactNode } from 'react';
import Topbar from './components/ui/Topbar';
import Footer from './components/ui/Footer';
import Overlay from './components/Overlay';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Topbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Overlay />
    </div>
  );
};

export default Layout;
