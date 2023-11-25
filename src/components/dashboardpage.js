import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const name = location.state.name;
    const bio = location.state.bio;

    const [quitgamemodal, setquitgamemodal] = useState(false);
    const Quitgame =()=>{
        setquitgamemodal(!quitgamemodal)
    }
    return (
        <>
        <div className='profile_con' onClick={()=>{navigate('/Dashboard/Profile',{state:{name, bio}})}}>
            <div className='profile_btn'></div>
            <div className='prfoile_name'>{name}</div>
        </div>
        <div className='logo_con dash_logo'></div>
        <div className='options_con'>
            <div className='options' onClick={()=>navigate('/Dashboard/Level1')}>
                <div className='option_bg'>
                <div className='option_icon icon1'></div>
                </div>
                <div className='option_name'>Start Game</div>
            </div>
            <div className='options' onClick={()=>{navigate('/Dashboard/SelectLevel',{state:{name}})}}>
            <div className='option_bg'>
                <div className='option_icon icon2'></div>
                </div>
                <div className='option_name'>Select Level</div>
            </div>
            <div className='options' onClick={()=>navigate('/Dashboard/HowtoPlay')}>
            <div className='option_bg'>
                <div className='option_icon icon3'></div>
                </div>
                <div className='option_name'>How to Play</div>
            </div>
            <div className='options' onClick={()=>navigate('/Dashboard/About')}>
            <div className='option_bg'>
                <div className='option_icon icon4'></div>
                </div>
                <div className='option_name about'>About</div>
            </div>
            <div className='options' onClick={Quitgame}>
            <div className='option_bg'>
                <div className='option_icon icon5'></div>
                </div>
                <div className='option_name'>Quit Game</div>
            </div>
        </div>
        
        {quitgamemodal && (
            <div className='modal'>
            <div className='overlay'>
                <div className='enter_player_con popup_con'>
                    <div className=' quit_game_heading'>Are you sure you want to Quit?</div>
                    <div className='popup_button_con'>
                    <button className='popup_button primary' onClick={()=>{navigate(-1)}}>Yes</button>
                    <button className='popup_button secondary' onClick={Quitgame}>No</button>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    );
}

export default Dashboard;