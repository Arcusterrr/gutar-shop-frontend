import React from 'react';
import { Link } from 'react-router-dom';

import './GoodCard.scss';

type GoodCardProps = {
    id:number
    name:string
    cost:number
    ImgPath:string
}

export const GoodCard: React.FC<GoodCardProps> = (props) => {
 return (
  <div className="Card">
      <div className="GoodImg">
          <Link to={`/good/${props.id}`}><img src={props.ImgPath} alt=""/></Link>
      </div>
      <div className="CardContent">
          <div className="Name">
            {props.name}
          </div>
          <div className="Cost">
            {props.cost}₽
          </div>
          <Link to={`/good/${props.id}`}>
          <button className="BuyButton">
            Купить
          </button>
          </Link>
      </div>
  </div>
 );
}