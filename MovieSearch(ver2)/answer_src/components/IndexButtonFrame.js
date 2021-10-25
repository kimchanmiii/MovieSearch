import React, { useCallback, useState } from 'react';
import './IndexButtonFrame.scss';
import IndexButton from './IndexButton';


const IndexButtonFrame = ({ indexButtons, onBtnClicked }) => {
    return (
        <div className="IndexButtonFrame">
            {indexButtons.map(idx => <IndexButton key={idx} idx={idx} onBtnClicked={onBtnClicked}></IndexButton>)}
        </div>
    );
};

export default IndexButtonFrame;
