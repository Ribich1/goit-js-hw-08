import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(onPlay, 1000));


function onPlay(evt) {
    localStorage.setItem("videoplayer-current-time", evt.seconds);
};

const savedTime = localStorage.getItem("videoplayer-current-time");
const parseSavedTime = JSON.parse(savedTime) || 0;

if (parseSavedTime) {
    player.setCurrentTime(parseSavedTime)
};




