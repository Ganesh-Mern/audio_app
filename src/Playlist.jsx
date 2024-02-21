// Playlist.js
import React from "react";
import PlaylistItem from "./PlaylistItem";
import styled from "styled-components";

const Playlist = ({ playlist, onTrackClick }) => {
  return (
    <PlaylistContainer className="playlist">
      <h2>Playlist</h2>
      <div>
        <ul>
          {playlist.map((file, index) => (
            <PlaylistItem
              key={index}
              file={file}
              onClick={() => onTrackClick(index)}
            />
          ))}
        </ul>
      </div>
    </PlaylistContainer>
  );
};

const PlaylistContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  h2 {
    font-family: sans-serif;
    font-size: 30px;
    display: flex;
    margin-left: 10px;
  }
  div {
    width: 100%;
    height: 100%;
    margin: 10px 0px;
    padding: 0px 7px;
    ul {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
`;

export default Playlist;
