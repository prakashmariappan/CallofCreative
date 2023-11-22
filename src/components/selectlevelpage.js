import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectLevelPage = () => {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    navigate(`/Dashboard/Level${level}`);
  };

  const handleMouseEnter = (difficulty) => {
    document.getElementById('level').innerHTML = `Difficulty Level: ${difficulty}`;
  };

  const handleMouseLeave = () => {
    document.getElementById('level').innerHTML = 'Difficulty Level:';
  };

  const generateLevelButtons = () => {
    const levels = [1, 2, 3, 4, 5, 6, 7, 8];

    return levels.map((level) => (
      <div
        key={level}
        className='level_arrange'
        onClick={() => handleLevelClick(level)}
        onMouseEnter={() => handleMouseEnter(getDifficulty(level))}
        onMouseLeave={handleMouseLeave}
      >
        <div className='levels'>
          <div className='level_no' id={level.toString()}>
            {level}
          </div>
        </div>
        <div className='level_number'>Level {level}</div>
      </div>
    ));
  };

  const getDifficulty = (level) => {
    if (level <= 3) {
      return 'Easy';
    } else if (level <= 6) {
      return 'Medium';
    } else {
      return 'Hard';
    }
  };

  return (
    <>
      <div className='page_topcon'>
        <div className='pagebackarrow_con' onClick={() => navigate(-1)}>
          <button className='nav_backbtn'></button>
          <div className='pagebt backtext'>Back</div>
        </div>
        <div className='page_heading'>Select Level</div>
      </div>
      <div className='level_type' id='level'>
        Difficulty Level:
      </div>
      <div className='select_level_con'>{generateLevelButtons()}</div>
    </>
  );
};

export default SelectLevelPage;
