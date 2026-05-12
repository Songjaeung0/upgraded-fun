import type { ReactNode } from 'react';
import Header from '../components/Header';

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <footer id="contact" className="footer container">
        <p>Contact · seongjaeung841@gmail.com · GitHub: Songjaeung0</p>
      </footer>
    </>
  );
}

export default MainLayout;
