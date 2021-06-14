import React from 'react';

type ImgContainerProps = {
    imgSource:string
}

export const ImgContainer: React.FC<ImgContainerProps> = (props) => {
 return (
  <div className="imgContainer">
      <div className="imgBox">
      <img src={props.imgSource} alt=""/>
      </div>
  </div>
 );
}