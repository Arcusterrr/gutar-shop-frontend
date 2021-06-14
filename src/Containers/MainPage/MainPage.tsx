import React from 'react';
import { Header, Obj3D, SliderReact, Footer } from '../../Components';
import { HorizontalScrolling } from '../../Components/UI/HorizontalScrolling';

import './MainPage.scss'

type MainPageProps = {
}

const server = 'https://localhost:5001/';

export const MainPage: React.FC<MainPageProps> = (props) => {
    return (
        <div>
            <Header />
            <div className="companyInfo">
                <p className='infoShop'><div className='GuitarShopTag'>GuitarShop</div> — лидер рынка розничной продажи музыкальных инструментов и оборудования в России. Наши магазины предлагают лучшие музыкальные инструменты, созданные мировыми производителями, а также весь спектр профессионального звукового, светового и студийного оборудования.
                Выбирайте товар и совершайте покупки, не выходя из дома.</p>
            </div>
            <div className="assort">
                <p>Наш магазин предоставляет огромный выбор товаров на любой вкус.</p>
                <p>От обычных акустических гитар, до самых изысканных электрогитар популярных фирм.</p>
            </div>
            <HorizontalScrolling className='Scroller'>
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
                <img className="ScrollItem" src="/app/Images/FourthSlide.jpg" />
            </HorizontalScrolling>
            <Footer />
        </div>
    );
}