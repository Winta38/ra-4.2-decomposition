// Header: логотип Яндекса, поисковая строка, кнопка "Найти"

import React from 'react';

function Header() {
    return (
        <header>
            <img src="logo.png" alt="Яндекс" />
            <input type="text" placeholder="Поиск" />
            <button>Найти</button>
        </header>
    );
}

export default Header;
