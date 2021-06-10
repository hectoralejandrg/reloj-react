import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementTime,
  decrementTime,
  startTime,
  lapTime,
  resetTime,
} from "../actions/relojAction";

export const Reloj = () => {
  const [hours, minutes, seconds] = useSelector((state) => state.time);
  const listLap = useSelector((state) => state.lapTime);
  const dispatch = useDispatch();
  const startRef = useRef();

  const handleIncrement = () => {
    dispatch(incrementTime());
  };

  const handleDecrement = () => {
    dispatch(decrementTime());
  };
  const handleStart = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      return null;
    }
    startRef.current = setInterval(() => {
      dispatch(startTime());
      console.log(minutes, seconds);
      //clearInterval(startRef.current);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(startRef.current);
  };
  const handleLapTime = () => {
    dispatch(lapTime());
  };
  const handleReset = () => {
    dispatch(resetTime());
  };

  return (
    <div>
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
      <div>
        <button onClick={() => handleIncrement()}>+</button>
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleStop()}>Stop</button>
        <button onClick={() => handleLapTime()}>Lap</button>
        <button onClick={() => handleReset()}>Reset</button>
        <button onClick={() => handleDecrement()}>-</button>
      </div>
    </div>
  );
};
