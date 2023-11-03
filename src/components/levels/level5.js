import React, { useState } from 'react';
import Data from '../../data';
import Picture from './picture';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';

const Level5 = () => {
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
    function showlinefun(){ 
        setline(line => !line);
    }
    let showline = line? 'show':'hide';

    function hidelinefun(){
        setline(line => !line);
    }
    
    //Drop function
    const[box1, setBox1] = useState([]);
    const[box2, setBox2] = useState([]);
    const[box3, setBox3] = useState([]);
    const[box4, setBox4] = useState([]);
    const[box5, setBox5] = useState([]);
    const[box6, setBox6] = useState([]);
    const[box7, setBox7] = useState([]);

    const [{}, drop1] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoBox1(item.key),
      }));
    
   function addImagetoBox1(key){
        const data = Data.level5.filter((picture)=> key === picture.id);
        setBox1([data[0]]);   
    };
    //////////
    const [{},drop2] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoBox2(item.key),
      }));
    
   function addImagetoBox2(key){
        const data = Data.level5.filter((picture)=> key === picture.id);
        setBox2([data[0]]);   
    };
    //////////
    const [{},drop3] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoBox3(item.key),
      }));
    
   function addImagetoBox3(key){
        const data = Data.level5.filter((picture)=> key === picture.id);
        setBox3([data[0]]);   
    };
    //////////
    const [{},drop4] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoBox4(item.key),
      }));
    
   function addImagetoBox4(key){
        const data = Data.level5.filter((picture)=> key === picture.id);
        setBox4([data[0]]);   
    };
    //////////
    const [{},drop5] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoBox5(item.key),
      }));
    
   function addImagetoBox5(key){
        const data = Data.level5.filter((picture)=> key === picture.id);
        setBox5([data[0]]);   
    };
    //////////
    const [{},drop6] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoBox6(item.key),
      }));
    
   function addImagetoBox6(key){
        const data = Data.level5.filter((picture)=> key === picture.id);
        setBox6([data[0]]);   
    };
    //////////
    const [{},drop7] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImagetoBox7(item.key),
      }));
    
   function addImagetoBox7(key){
        const data = Data.level5.filter((picture)=> key === picture.id);
        setBox7([data[0]]);   
    };
    //////////
    

    //checking the dropbox for image function
    function checkimg(){
    let firstbox= document.getElementById('l5b1');
    let secondbox= document.getElementById('l5b2');
    let thirdbox= document.getElementById('l5b3');
    let fourbox= document.getElementById('l5b4');
    let fivebox= document.getElementById('l5b5');
    let sixbox= document.getElementById('l5b6');
    let sevenbox= document.getElementById('l5b7');

    let firstno= !firstbox.querySelector('img');
    let secondno= !secondbox.querySelector('img');
    let thirdno= !thirdbox.querySelector('img');   
    let fourno= !fourbox.querySelector('img');
    let fiveno= !fivebox.querySelector('img');
    let sixno= !sixbox.querySelector('img');
    let sevenno= !sevenbox.querySelector('img');     
    if(firstno || secondno || thirdno || fourno || fiveno || sixno || sevenno){
        alert('Please arrange all the Images and Try Again');
    }
    else{
        evaluation();
    }
    }

    //evaluation function
    function evaluation(){
    let first= document.getElementById('l5b1').querySelector("img").getAttribute("name");
    let second= document.getElementById('l5b2').querySelector("img").getAttribute("name");
    let third= document.getElementById('l5b3').querySelector("img").getAttribute("name");
    let four= document.getElementById('l5b4').querySelector("img").getAttribute("name");
    let five= document.getElementById('l5b5').querySelector("img").getAttribute("name");
    let six= document.getElementById('l5b6').querySelector("img").getAttribute("name");
    let seven= document.getElementById('l5b7').querySelector("img").getAttribute("name");

        if(first==='1' && second==='2' && third==='3' && four==='4' && five==='5' && six==='6' && seven==='7'){  
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
            <div className='nav_logo'></div>
            <button  onMouseEnter={showlinefun} onMouseLeave={hidelinefun} className='eye_icon navicon'></button>
        </div>
        <div className='box_con'>
            <div className='drop_box'>
                <div className={showline} name='box'  id='l5b1' ref={drop1}>
                {box1.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>             
                <div className='level5_row'>   
                <div className={showline} name='box' id='l5b2' ref={drop2}>
                {box2.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>
                <div className={showline} name='box' id='l5b3' ref={drop3}>
                {box3.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>
                <div className='level5_para'>
                <div className={showline} name='box'  id='l5b4' ref={drop4}>
                {box4.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>        
                <div className={showline} name='box' id='l5b5' ref={drop5}>
                {box5.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>
                </div>   
                <div className={showline} name='box' id='l5b6' ref={drop6}>
                {box6.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>
                </div>
                <div className={showline} name='box' id='l5b7' ref={drop7}>
                {box7.map((picture) => {
                    return <Picture id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
                })}     
                </div>    
            </div>
            <div className='right_con'>
            <div className='drag_box'>  
            <div className='drag_con'>
                {Data.level5.map((picture)=>{
                return <Picture  id={picture.id} key={picture.id} name={picture.name} image={picture.image}/>;
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
                    <button className='popup_button sb primary' onClick={()=>{navigate('/Dashboard/Level6')}}>Play Next level</button>
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

export default Level5;