import React, { useState, useEffect } from 'react';
import Data from '../../data';
import Picture from './picture';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import ImageComponent from '../../refimage';
import image from '../../Images/Level_8/ref.png';
import Lastwin from '../lastgamewin';
import Lose from '../lose';
import GameOver from '../gameover';

const Level8 = () => {
    //Image Component value
    const imageSrc = image;
    
    //tryagian or play agian function
    const navigate = useNavigate();
    const tryagain = () => {
        window.location.reload();
      };
    
    //win or lose or Time Up popup function  
const [winmodal, setwinModal] = useState(false);
const [losemodal, setloseModal] = useState(false);
const [gameovermodal, setgameoverModal] = useState(false);

const toggleWin = () => {
    setwinModal(!winmodal);
};
const toggleLose = () => {
    setloseModal(!losemodal);
};
const toggleGameOver = () => {
    setgameoverModal(!gameovermodal);
};

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
     const[box4, setBox4] = useState([]);
     const[box5, setBox5] = useState([]);
     const[box6, setBox6] = useState([]);
 
     function useDropForBox(box, setBox) {
         const [{}, drop] = useDrop(() => ({
             accept: "image",
             drop: (item) => addImagetoBox(item.key),
         }));
     
         function addImagetoBox(key) {
             const data = Data.level8.filter((picture) => key === picture.id);
             setBox([...box,data[0]]);
         }
     
         return drop;
     }
     
     const drop1 = useDropForBox(box1, setBox1);
     const drop2 = useDropForBox(box2, setBox2);
     const drop3 = useDropForBox(box3, setBox3);
     const drop4 = useDropForBox(box4, setBox4);
     const drop5 = useDropForBox(box5, setBox5);
     const drop6 = useDropForBox(box6, setBox6);
 
     //checking the dropbox for image function
     function checkimg() {
     if (box1.length === 0 || box2.length === 0 || box3.length === 0 || box4.length === 0 || box5.length === 0 || box6.length === 0)  {
         alert('Please arrange all the Images and Try Again');
     } else {
         evaluation();
     }
     };

    //evaluation function
    function evaluation(){
    let first= document.getElementById('l4b1').querySelector("img").getAttribute("data-name");
    let second= document.getElementById('l4b2').querySelector("img").getAttribute("data-name");
    let third= document.getElementById('l4b3').querySelector("img").getAttribute("data-name");
    let four= document.getElementById('l8b4').querySelector("img").getAttribute("data-name");
    let five= document.getElementById('l8b5').querySelector("img").getAttribute("data-name");
    let six= document.getElementById('l8b6').querySelector("img").getAttribute("data-name");

        if(first==='1' && second==='2' && third==='3' && four==='4' && five==='5' && six==='6'){  
            toggleWin();
          }
          else{
              toggleLose();
          }
    };
    
    const [timeLeft, setTimeLeft] = useState(30);
    // Function to be executed when the timer reaches zero
     const handleTimeout = () => {
        if (box1.length === 0 || box2.length === 0 || box3.length === 0 || box4.length === 0 || box5.length === 0 || box6.length === 0)  {
            toggleGameOver();
        } else {
            evaluation();
        }
    };

    useEffect(() => {
        if (timeLeft > 0) {
          const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000); // 1000 milliseconds = 1 second
        
        // Clear the timer when the component unmounts or when the timer ends
        return () => clearTimeout(timer);
        }
        else {
            handleTimeout();
        }
    }, [timeLeft]);

    return (
        <>
       <div className='navbar'>
            <div className='nav_left'>
            <button className='nav_backbtn' onClick={() => navigate(-1)}></button>
            </div>
            <div className='nav_logo'></div>
            <div className='nav_right'>
            <p className='time_left'>Time Left: {timeLeft} seconds</p>
            <ImageComponent src={imageSrc}/>
            <button  onMouseEnter={showlinefun} onMouseLeave={hidelinefun} className='eye_icon navicon'></button>
            </div>      
        </div>
        <div className='box_con'>
            <div className='drop_box'>
                <div className='l8_row'>
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
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div> 
                </div>
                <div className='l8_column'>
                <div className={showline} name='box'  id='l8b4' ref={drop4}>
                {box4.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>        
                <div className={showline} name='box' id='l8b5' ref={drop5}>
                {box5.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}      
                </div>  
                <div className={showline} name='box' id='l8b6' ref={drop6}>
                {box6.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div> 
                </div>
            </div>
            <div className='right_con'>
            <div className='drag_box'>  
            <div className='drag_con'>
                {Data.level8.map((picture)=>{
                return <Picture  id={picture.id} key={picture.id} name={picture.name} image={picture.image} />;
            })}
            </div>
            </div> 
            
            <button onClick={checkimg} className='finish_btn'>Finish</button>
            </div>
        </div>
        {winmodal && (
           <Lastwin/>
        )}
        {losemodal && (
            <Lose/>
        )}
        {gameovermodal && (
            <GameOver/>
        )}
        </>
    );
}

export default Level8;