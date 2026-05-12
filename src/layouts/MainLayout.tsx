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
        <p>Contact · your.email@example.com · GitHub / Behance</p>
      </footer>
    </>
  );
}

export default MainLayout;
