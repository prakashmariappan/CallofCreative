import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
const Confetti = () => {
    const [windowdimesion, setdimesion] = useState({width: window.innerWidth, height: window.innerHeight})
    return (
        <>
          <ReactConfetti width={windowdimesion.width} height={windowdimesion.height}/>  
        </>
    );
}

export default Confetti;
