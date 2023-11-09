import React from 'react';
import { useNavigate } from 'react-router-dom';

const LastWin = () => {
    
    const navigate = useNavigate();
    //tryagian or play agian function
    const tryagain = () => {
        window.location.reload();
      };
    return (
        <>
         <div className='modal'>
            <div className='overlay'>
                <div className='win_con popup_con'>
                    <div className='score_popup_heading'>You Win!!!</div>
                    <div className='win_img'></div>
                    <div className='score_button_con'>
                    <button className='popup_button sb primary' onClick={tryagain}>Play Again</button>
                    </div>
                    <div className='home_div'>
                    <button className='go_to_home' onClick={()=>{navigate(-1)}}>Go to Home</button>
                    <div className='homeimg'></div>
                    </div>  
                </div>
            </div>
        </div>    
        </>
    );
}

export default LastWin;
