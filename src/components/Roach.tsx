import Image from 'next/image';
import { useState } from 'react';

import styles from './Roach.module.css';

export default function Roach() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  function doRoachSound() {
    if (audioPlaying) return;

    const roachElement = document.getElementById('roach');
    if (!roachElement) throw new Error('roach element not found');

    const selectedAudio = Math.floor(Math.random() * 9);
    const audio = new Audio(`./audio/roach${selectedAudio}.mp3`);
    audio.autoplay = true;

    setAudioPlaying(true);

    roachElement.style.cursor = 'default';
    audio.play();

    audio.addEventListener('play', () => {
      setTimeout(() => {
        roachElement.style.transform = 'translateY(5px)';
        setTimeout(() => {
          roachElement.style.transform = 'translateY(0)';
        }, 200);
      }, 100);
    });

    audio.addEventListener('ended', () => {
      var delayTime = Math.random() * 2000;
      setTimeout(() => {
        setAudioPlaying(false);
        roachElement.style.cursor = 'pointer';
      }, delayTime);
    });
  }

  return (
    <Image
      id='roach'
      className={styles.roach}
      src='/img/roach.gif'
      alt='roach'
      width='16'
      height='16'
      onClick={doRoachSound}
    />
  );
}
