// Navigation: ссылки на различные сервисы Яндекса (например, "Почта", "Карты", "Маркет" и т.д.)

import React from 'react';

function Navigation() {
    return (
        <nav>
            <ul className="nav-links">
                <li><a href="/maps">Карты</a></li>
                <li><a href="/mail">Почта</a></li>
                <li><a href="/news">Новости</a></li>
                <li><a href="/images">Картинки</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
