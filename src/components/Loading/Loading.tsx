import React, {FC} from 'react';
import './Loading..scss'

const Loading:FC = () => {
    return (
        <div>
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </div>
    );
};

export default Loading;