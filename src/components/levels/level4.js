import React, { useState } from 'react';
import Data from '../../data';
import Picture from './picture';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import ImageComponent from '../../refimage';
import image from '../../Images/Level_4/ref.png';

const Level4 = () => {
    //Image Component value
    const imageSrc = image;
    
    //tryagian or play agian function
    const navigate = useNavigate();
    const tryagain = () => {
        window.location.reload();
      };
    
     //win and lose popup function  
    const [winmodal, setwinModal] = useState(false);
    const [losemodal, setloseModal] = useState(false);
    const toggleWin =()=>{
        setwinModal(!winmodal)
    }
    const toggleLose =()=>{
        setloseModal(!losemodal)
    }

  //eye function 
  const [line, setline] = useState(false);
  function showlinefun() { 
      setline((line) => !line); // Use a callback to ensure you get the updated value
  }
  function hidelinefun(){
      setline((line) => !line);
  }
  let showline = line? 'show':'hide';
    
     //Drop function
     const[box1, setBox1] = useState([]);
     const[box2, setBox2] = useState([]);
     const[box3, setBox3] = useState([]);
 
     function useDropForBox(box, setBox) {
         const [{}, drop] = useDrop(() => ({
             accept: "image",
             drop: (item) => addImagetoBox(item.key),
         }));
     
         function addImagetoBox(key) {
             const data = Data.level4.filter((picture) => key === picture.id);
             setBox([...box,data[0]]);
         }
     
         return drop;
     }
     
     const drop1 = useDropForBox(box1, setBox1);
     const drop2 = useDropForBox(box2, setBox2);
     const drop3 = useDropForBox(box3, setBox3);
     
 
     //checking the dropbox for image function
     function checkimg() {
     if (box1.length === 0 || box2.length === 0 || box3.length === 0) {
         alert('Please arrange all the images and Try Again');
     } else {
         evaluation();
     }
 };
    //evaluation function
    function evaluation(){
    let first= document.getElementById('l4b1').querySelector("img").getAttribute("data-name");
    let second= document.getElementById('l4b2').querySelector("img").getAttribute("data-name");
    let third= document.getElementById('l4b3').querySelector("img").getAttribute("data-name");

        if(first==='1' && second==='2' && third==='3'){  
            toggleWin();
          }
          else{
              toggleLose();
          }
    };
    
    //naviagto to dashbaord page function
    return (
        <>
        <div className='navbar'>
            <div className='nav_left'></div>
            <div className='nav_logo'></div>
            <div className='nav_right'>
            <ImageComponent src={imageSrc}/>
            <button  onMouseEnter={showlinefun} onMouseLeave={hidelinefun} className='eye_icon navicon'></button>
            </div>      
        </div>
        <div className='box_con'>
            <div className='drop_box'>
                <div className='row'>
                    
                <div className={showline} name='box'  id='l4b1' ref={drop1}>
                {box1.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>        
                <div className={showline} name='box' id='l4b2' ref={drop2}>
                {box2.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}      
                </div>  
                <div className={showline} name='box' id='l4b3' ref={drop3}>
                {box3.map((picture) => {
                    return <Picture id={picture.id}key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div> 
                </div>
            </div>
            <div className='right_con'>
            <div className='drag_box'>  
            <div className='drag_con'>
                {Data.level4.map((picture)=>{
                return <Picture  id={picture.id} key={picture.id} name={picture.name} image={picture.image} />;
            })}
            </div>
            </div> 
            
            <button onClick={checkimg} className='finish_btn'>Finish</button>
            </div>
        </div>
        {winmodal && (
            <div className='modal'>
            <div className='overlay'>
                <div className='win_con popup_con'>
                    <div className='score_popup_heading'>You Win!!!</div>
                    <div className='win_img'></div>
                    <div className='score_button_con'>
                    <button className='popup_button sb secondary' onClick={tryagain}>Play Again</button>
                    <button className='popup_button sb primary' onClick={()=>{navigate('/Dashboard/Level3')}}>Play Next level</button>
                    </div>
                    <div className='home_div' onClick={()=>{navigate(-1)}}>
                    <div className='go_to_home'>Go to Home</div>
                    <div className='homeimg'></div>
                    </div>  
                </div>
            </div>
        </div>
        )}
        {losemodal && (
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
        )}
        </>
    );
}

export default Level4;