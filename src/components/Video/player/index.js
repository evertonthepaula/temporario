import React, { useState, useRef } from 'react';

export default function Player() {
  const videEl = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurentTime] = useState();

  function initTimeline() {
    setDuration(videEl.current.duration);
  }

  function changeTimeline(e) {
    videEl.current.currentTime = e.target.value;
  }

  function timeUpdate() {
    setCurentTime(videEl.current.currentTime);
  }

  function handleClick(e) {
    stopEvents(e);
    tooglePlay();
  }

  function handleContextMenu(e) {
    stopEvents(e);
  }

  function stopEvents(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function tooglePlay() {
    return videEl.current.paused ? play() : pause();
  }

  function play() {
    videEl.current.play();
  }

  function pause() {
    videEl.current.pause();
  }

  function refresh() {
    videEl.current.currentTime = 0;
    play();
  }

  function mute() {
    videEl.current.muted = !videEl.current.muted;
  }

  function changeAudio(e) {
    volume(e.target.value / 100);
  }

  function volume(vol) {
    videEl.current.volume = vol;
  }

  function speed(val = 1) {
    videEl.current.playbackRate = val;
  }

  return (
    <>
      <video
        controls
        width="300"
        ref={videEl}
        preload="auto"
        onClick={handleClick}
        controlsList="nodownload"
        onContextMenu={handleContextMenu}
        onCanPlay={initTimeline}
        onTimeUpdate={timeUpdate}
        src={`${process.env.PUBLIC_URL}videos/ramay.mp4`}
      >
        <track src="" kind="captions" srcLang="en" label="english_captions" />
      </video>
      <button type="button" onClick={handleClick}>
        play/pause
      </button>
      <button type="button" onClick={refresh}>
        refresh
      </button>
      <button type="button" onClick={mute}>
        mute
      </button>
      <br />
      audio
      <input type="range" min="0" max="100" onChange={changeAudio} />
      <br />
      timeline
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={changeTimeline}
      />
      <br />
      <label htmlFor="speed1">1x</label>
      <input
        type="radio"
        value="1"
        id="speed1"
        name="speed"
        onChange={() => speed(1)}
      />
      <label htmlFor="speed15">1.5x</label>
      <input
        type="radio"
        value="1.5"
        id="speed15"
        name="speed"
        onChange={() => speed(1.5)}
      />
      <label htmlFor="speed2">2x</label>
      <input
        type="radio"
        value="2"
        id="speed2"
        name="speed"
        onChange={() => speed(2)}
      />
      <label htmlFor="speed25">2.5x</label>
      <input
        type="radio"
        value="2.5"
        id="speed2.5"
        name="speed"
        onChange={() => speed(2.5)}
      />
      <label htmlFor="speed3">3x</label>
      <input
        type="radio"
        value="3"
        id="speed3"
        name="speed"
        onChange={() => speed(3)}
      />
    </>
  );
}
