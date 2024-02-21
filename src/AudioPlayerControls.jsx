// AudioPlayerControls.js
import React from 'react';
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import styled from 'styled-components';
const AudioPlayerControls = ({ onPrevClick, onNextClick }) => {
  return (
    <Btn className="audio-controls">
      <button onClick={onPrevClick}><TbPlayerTrackPrevFilled className='btn' /></button>
      <button onClick={onNextClick}><TbPlayerTrackNextFilled className='btn'/></button>
    </Btn>
  );
};
const Btn=styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .btn{
    font-size: 30px;
    &:hover{
      color: #d81159 ;
    }
  }
`

export default AudioPlayerControls;
