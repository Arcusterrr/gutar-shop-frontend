import React, { useEffect, useState } from 'react';
import { useServerMutation } from '../../../hooks';
import {CreateCartItems} from '../../../server/'
import { Redirect} from 'react-router-dom';


type BuyButtonProps = {
    idGuitar:number
}

export const BuyButton: React.FC<BuyButtonProps> = (props) => {
const [red, setRed] = useState<any>();

const { mutate: item, isSuccess } = useServerMutation('asdwadfasf', CreateCartItems);

const addItemToCart = () => {
    item({
      id: props.idGuitar
    });
  };
useEffect(() => {
    if (isSuccess) {
        setRed(<Redirect to='/order'/>);
    }
}, [isSuccess]);

 return (
     <>
     {red}
    <button className="BuyButton" onClick={addItemToCart}>
        Купить
    </button>
  </>
 );
}