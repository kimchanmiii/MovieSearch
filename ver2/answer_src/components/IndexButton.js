import React, { useCallback, useState } from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './IndexButton.scss';

const IndexButton = ({ idx, onBtnClicked }) => {
    return (
        <button className="IndexButton" value={idx + 1} onClick={onBtnClicked}>
            { idx + 1}
        </button >
    );
};

export default IndexButton;
