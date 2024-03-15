import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
function ElapsedTime({
  startTime = "",
  title = "",
  handleStage = () => {},
  id = "",
  onlyTimeNeeded = false,
}) {
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
  const getBackgroundColor = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    return minutes % 60 >= 3 ? "red" : "inherit";
  };
  return onlyTimeNeeded ? (
    <p>{formatElapsedTime(elapsedTime)}</p>
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: getBackgroundColor(elapsedTime),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: getBackgroundColor(elapsedTime) === "red" ? "white" : "black",
      }}
    >
      <p>Order Id: {id}</p>
      <p>
        {title} : {formatElapsedTime(elapsedTime)}
      </p>
      <button
        onClick={() => {
          handleStage(id);
        }}
      >
        Next
      </button>
    </div>
  );
}
export default ElapsedTime;
