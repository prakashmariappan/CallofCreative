import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lose = () => {

    const navigate = useNavigate();
    //tryagian or play agian function
    const tryagain = () => {
        window.location.reload();
      };

    return (
        <>
        <div className='modal'>
            <div className='overlay'>
                <div className='more_info_con popup_con'>
                    <div className='score_popup_heading'>You Lose</div>
                    <div className='lose_img'></div>
                    <div className='score_button_con'>
                    <button className='popup_button sb primary' onClick={tryagain}>Try Again</button>
                    </div>
                    <div className='home_div' onClick={()=>{navigate(-1)}}>
                    <div className='go_to_home'>Go to Home</div>
                    <div className='homeimg'></div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    );
}

export default Lose;
