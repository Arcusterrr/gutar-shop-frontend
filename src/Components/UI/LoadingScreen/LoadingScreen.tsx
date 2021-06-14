import React from 'react';

import './LoadingScreen.scss';

type LoadingScreenProps = {
}

export const LoadingScreen: React.FC<LoadingScreenProps> = (props) => {
 return (
    <div className="loader"></div>
 );
}