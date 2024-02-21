// PlaylistItem.js
import React from 'react';
import styled from 'styled-components';

const PlaylistItem = ({ file, onClick }) => {
  return (
    <List onClick={onClick}><h1>{file.name}</h1></List>
  );
};

const List=styled.li`
display: flex;
align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid white;
  padding-left: 5px;
  font-family: sans-serif;
  font-weight: bolder;
  background-color: black;
  border-radius: 20px;
  margin: 7px 0px;
 
  &:hover{
    background-color: #585454;
  }
`

export default PlaylistItem;
