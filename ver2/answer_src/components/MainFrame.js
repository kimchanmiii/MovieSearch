import React from 'react';
import './MainFrame.scss';

const MainFrame = ({ children }) => {
    return (
        <div className="MainFrame">
            <div className="app-title">영화 검색 서비스</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default MainFrame;
