import React from 'react';

import './ErrorIndicator.scss';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div className="error-indicator__text">
                <p>Извините, но что-то пошло не так.</p> 
                <p>Скоро исправим</p>
            </div>
        </div>
    )
};

export default ErrorIndicator
