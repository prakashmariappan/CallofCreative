import React from 'react';
import { useNavigate } from 'react-router-dom';
const Howtoplay = () => {
    const navigate = useNavigate();
    return (
        <>
        <button className='back_btn' onClick={()=>navigate(-1)}></button>
        <div className='page_heading'>How to Play</div>
        <div className='howtoplay'>
            <li className='list'>Click the "Start" button to begin the game.</li>
            <li className='list'>A game screen containing draggable items and target areas will appaer.</li>
            <li className='list'>Click and hold your mouse button on it to move an item.</li>
            <li className='list'>While Holding mouse, drag the item to the desired location.</li>
            <li className='list'>Release your mouse button to drop the item.</li>
            <li className='list'>After placing the item is correctly, you can move on to the next item.</li>
            <li className='list'>Click the "Finish" Button to see your socre box.</li>
        </div>
        </>
    );
}

export default Howtoplay;