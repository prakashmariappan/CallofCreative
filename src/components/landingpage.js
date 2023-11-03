import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const Landingpage = () => {
    const navigate = useNavigate();

    const [enterplayermodal, setenterplayerModal] = useState(false);
    const [moreinfomodal, setmoreinfoModal] = useState(false);
    const toggleEnterplayer =()=>{
        setenterplayerModal(!enterplayermodal)
    }
    const toggleMoreInfo =()=>{
        setmoreinfoModal(!moreinfomodal)
    }
    const [name,setName]= useState('');
    const [bio,setBio]= useState('');
    return (
        <> 
        <div className='landing_page-con'>
            <div className='logo_con'></div>
            <div className='landing_page_button_con'>
                <button className='lan_button' onClick={toggleEnterplayer}>Get Started</button>
                <button className='lan_button' onClick={toggleMoreInfo}>More Info</button>
            </div>
        </div>
        <div className='footer_name'><h1 className='footer_title'>Created by NetWeavers</h1></div>
        {enterplayermodal && (
            <div className='modal'>
            <div className='overlay'>
                <div className='enter_player_con popup_con'>
                    <div className='popup_heading ep'>Enter your Details</div>
                    <input className='input' id='name-input' type='text' placeholder='Enter Your Name' autoComplete="off" value={name} onChange={(event)=>setName(event.target.value)}/>
                    <input className='bio' id='bio-input' type='text' placeholder='Enter Your Bio' autoComplete="off" value={bio} onChange={(event)=>setBio(event.target.value)}/>
                    <div className='popup_button_con'>
                    <button className='popup_button primary' onClick={()=>{navigate('/Dashboard',{state:{name, bio}})}}>Ok</button>
                    <button className='popup_button secondary' onClick={toggleEnterplayer} >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        )}

{moreinfomodal && (
            <div className='modal'>
            <div className='overlay'>
                <div className='more_info_con popup_con'>
                    <div className='popup_heading'>More Info</div>
                    <div className='moreinfo_content_con'>
                    Call of Creative is developed by the 'Team NetWeavers' for students and developers who can learn UI/UX design by playing this game. While encouraging strategy, skill development, and a sense of accomplishment, the game is made to provide enjoyment, excitement, and much knowledge about UI/UX Design.
                    </div>
                    <button className='close_btn' onClick={toggleMoreInfo}></button>
                </div>
            </div>
        </div>
        )}
        
        </>
    );
}

export default Landingpage;