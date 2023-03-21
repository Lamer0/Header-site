import React from "react";
export default function Header() {
    return (
        <div className="header">
            <div className="header_line"></div>
            <div className="header_items">
                <div className="header_locate">
                <span className="header_LOGO"></span>
                <button className="button_locate">
                    <span className="material-symbols-outlined">
                        near_me
                    </span>
                </button>
                <label className="header_label">Выберите город</label>
                </div>
                <div className="inner-addon left-addon">
                    <span className="material-symbols-outlined glyphicon glyphicon-user">
                        search
                    </span>
                    <input className="header_input" type="text" placeholder="Учебное заведение, специальность или профессия"/>
                </div>
                <button className="button_like">
                    <span className="material-symbols-outlined">
                      favorite
                    </span>
                </button>
            </div>
            <div className="header_menu">
                <button>Вузы</button>
                <button>Колледжи</button>
                <button>Техникумы</button>
                <button>Училища</button>
                <button>Специальности</button>
                <button>Профессии</button>
                <button>Отзывы</button>
                <button>Учебные заведения</button>
            </div>
        </div>
    )
 }
