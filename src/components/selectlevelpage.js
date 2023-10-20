import React from 'react';
import { useNavigate } from 'react-router-dom';
const Selectlevelpage = () => {
    const navigate = useNavigate();
    return (
        <>
        <button className='back_btn' onClick={()=>navigate(-1)}></button>
        <div className='page_heading'>Select Level</div>
        <div className='select_level_con'>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level1')}><div className='level_no'>1</div></div>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level2')}><div className='level_no'>2</div></div>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level3')}><div className='level_no'>3</div></div>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level4')}><div className='level_no'>4</div></div>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level5')}><div className='level_no'>5</div></div>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level6')}><div className='level_no'>6</div></div>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level7')}><div className='level_no'>7</div></div>
            <div className='levels' onClick={()=>navigate('/Dashboard/Level8')}><div className='level_no'>8</div></div>
        </div>
        </>
    );
}

export default Selectlevelpage;