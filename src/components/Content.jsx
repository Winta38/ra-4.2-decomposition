// Content: блок с новостями и статьями, блок с рекламой, блок с погодой

import React from 'react';

function NewsItem({ icon, text, link }) {
    return (
        <li>
            <img src={icon} alt="Иконка" />
            <a href={link}>{text}</a>
        </li>
    );
}

function Content() {
    return (
        <div className="content">
            <div className="news">
                <h2>Последние новости</h2>
                <ul>
                    <NewsItem
                        icon="news1.png"
                        text="Заголовок новости 1"
                        link="/news1"
                    />
                    <NewsItem
                        icon="news2.png"
                        text="Заголовок новости 2"
                        link="/news2"
                    />
                    <NewsItem
                        icon="news3.png"
                        text="Заголовок новости 3"
                        link="/news3"
                    />
                </ul>
            </div>
            <div className="advertisement">
                <h2>Реклама</h2>
                <img src="advertisement.png" alt="Реклама" />
            </div>
            <div className="weather">
                <h2>Погода</h2>
                <p>Сегодня: 25°C, солнечно</p>
            </div>
        </div>
    );
}

export default Content;

