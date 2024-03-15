import React, {useState,useEffect} from 'react'
import {useDispatch } from 'react-redux'

function ElapsedTime({ startTime,title }) {
    const [elapsedTime, setElapsedTime] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        setElapsedTime(elapsed);
      }, 1000); // Update every second
      return () => clearInterval(interval);
    }, [startTime]);
    // Format elapsed time for display
    const formatElapsedTime = (milliseconds) => {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    };
    return (
      <div>
        {title} : {formatElapsedTime(elapsedTime)}
      </div>
    );
  }

  export default ElapsedTime ;