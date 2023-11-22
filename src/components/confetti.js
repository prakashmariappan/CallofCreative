import React, { useState } from 'react';
import ReactConfetti from 'react-confetti';
const Confetti = () => {
    const [windowdimesion] = useState({width: window.innerWidth, height: window.innerHeight})
    return (
        <>
          <ReactConfetti gravity={0.5} width={windowdimesion.width} height={windowdimesion.height}/>  
        </>
    );
}

export default Confetti;
