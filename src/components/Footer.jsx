// Footer: ссылки на дополнительные страницы и сервисы, информация о Яндексе

import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="links">
        <a href="/about">О нас</a>
        <a href="/contact">Контакты</a>
        <a href="/terms">Условия использования</a>
      </div>
      <p>© 2024 Яндекс. Все права защищены.</p>
    </footer>
  );
}

export default Footer;
