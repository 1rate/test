import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="header__title">Дополнительные услуги</h1>
          <p className="header__subtitle">
            Улучшите ваше путешествие с нашими услугами
          </p>
        </div>
      </header>
      
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>© 2024 Авиакомпания. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;