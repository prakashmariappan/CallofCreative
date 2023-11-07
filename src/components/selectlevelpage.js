import React from 'react';
import { useNavigate } from 'react-router-dom';

const Selectlevelpage = () => {
    const navigate = useNavigate();
    const levelCount = 8; // Specify the total number of levels

    const renderLevelLinks = () => {
        const levelLinks = [];

        for (let level = 1; level <= levelCount; level++) {
            levelLinks.push(
                <div className='levels' onClick={() => navigate(`/Dashboard/Level${level}`)} key={level}>
                    <div className='level_no'>{level}</div>
                </div>
            );
        }

        return levelLinks;
    };

    return (
        <>
            <button className='back_btn' onClick={() => navigate(-1)}></button>
            <div className='page_heading'>Select Level</div>
            <div className='select_level_con'>
                {renderLevelLinks()}
            </div>
        </>
    );
}

export default Selectlevelpage;