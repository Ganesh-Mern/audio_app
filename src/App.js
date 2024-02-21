// App.js
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Dropzone from "react-dropzone";
import Playlist from "./Playlist";
import AudioPlayerControls from "./AudioPlayerControls";
import styled from "styled-components";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    
    const storedPlaylist = JSON.parse(localStorage.getItem("playlist"));
    if (storedPlaylist) {
      setPlaylist(storedPlaylist);
    }


    const lastPlayedIndex = JSON.parse(localStorage.getItem("lastPlayedIndex"));
    if (lastPlayedIndex !== null) {
      setCurrentTrackIndex(lastPlayedIndex);
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem("playlist", JSON.stringify(playlist));


    localStorage.setItem("lastPlayedIndex", JSON.stringify(currentTrackIndex));
  }, [playlist, currentTrackIndex]);

  const handleDrop = (acceptedFiles) => {
    setPlaylist([...playlist, ...acceptedFiles]);
  };

  const playTrack = (index) => {
    if (index >= 0 && index < playlist.length) {
      setCurrentTrackIndex(index);
      audioRef.current.src = URL.createObjectURL(playlist[index]);
      audioRef.current.play();
    }
  };

  const handleEnded = () => {
 
    playTrack(currentTrackIndex + 1);
  };

  const playNextTrack = () => {
    playTrack(currentTrackIndex + 1);
  };

  const playPreviousTrack = () => {
    playTrack(currentTrackIndex - 1);
  };

  return (
    <MainContainer className="App">
      <TextContainer>
        <h1>Audio Player</h1>
      </TextContainer>
      <Container>
        <LiistContainer>
          <Dropzone onDrop={handleDrop} accept=".mp3" multiple={true}>
            {({ getRootProps, getInputProps }) => (
              <Additem>
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  <button>Add Audio</button>
                </div>
              </Additem>
            )}
          </Dropzone>
          <Playlist playlist={playlist} onTrackClick={playTrack} />
        </LiistContainer>
        <PlayerContainer>
          <PlayContent className="now-playing">
            <h2>Now Playing</h2>
            {currentTrackIndex !== -1 && (
              <marquee behavior="scroll" direction=""><p>{playlist[currentTrackIndex].name}</p></marquee>
            )}
          </PlayContent>
          <AudioContainer controls ref={audioRef} onEnded={handleEnded}></AudioContainer>
          <AudioPlayerControls
            onPrevClick={playPreviousTrack}
            onNextClick={playNextTrack}
          />
        </PlayerContainer>
      </Container>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
 
  display: flex;
  flex-direction: column;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  font-family: sans-serif;
  font-weight: bolder;
  color: #ff6b35;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin-top: 100px;
`;

const Additem=styled.section`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 
 button{
  margin: 10px;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  background-color: #d81159;
  &:hover{
    background-color: transparent;
    border: 1px solid white;
  }
 }
`

const LiistContainer = styled.div`
  width: 300px;
  height: 350px;
  
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;

`;
const PlayerContainer = styled.div`
  width: 270px;
  height: 350px;
  /* border: 1px solid red; */
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.2);`;


const PlayContent=styled.div`
width: 100%;
height: 60%;
display: flex;
flex-direction: column;
justify-content: space-around;

h2{
  font-size: 30px;
  font-family: sans-serif;
  font-weight: bolder;
  color:#d81159 ;
}
p{
font-size: 20px;

font-family: Arial, Helvetica, sans-serif;

}
`
const AudioContainer=styled.audio`
width: 100%;
padding: 0px 10px;
`
export default App;
