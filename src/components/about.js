import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    return (
        <>
        <button className='back_btn' onClick={()=>navigate(-1)}></button>
        <div className='page_heading'>About</div>
        <div className='content'>Call of Creative is developed by the 'Team NetWeavers' for students and developers who can learn UI/UX design by playing this game. Call of Creative is a thriving online gaming community where gamers of all backgrounds can come to celebrate their shared love for gaming. While encouraging strategy, skill development, and a sense of accomplishment, the game is made to provide enjoyment, excitement, and much knowledge about UI/UX Design.</div>
        <div className='footer_name'><h1 className='footer_title'>Release Date - 10/19/2023 V1.0</h1></div>
        </>
    );
}

export default About;