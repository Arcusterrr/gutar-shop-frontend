import React from 'react';

import './Button.scss';

type ButtonProps = {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Button: React.FC<ButtonProps> = (props) => {
 return (
  <div className="button" onClick={props.onClick}>
      <span>{props.children}</span>
  </div>
 );
}