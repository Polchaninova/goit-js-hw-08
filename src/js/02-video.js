import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const TIME = "videoplayer-current-time";

const player = new Player(iframe);

const onPlay = function (data) {
  // console.log(data.seconds);
  localStorage.setItem(TIME, JSON.stringify(data.seconds))
};

const savePlayVideo = localStorage.getItem(TIME)
const parsePlayVideo = JSON.parse(savePlayVideo)
// console.log(parsePlayVideo);

player.on('play', onPlay);
player.on('pause', onPlay);

player.on('timeupdate', throttle(onPlay, 500));


if (parsePlayVideo?.seconds) {
  player.setCurrentTime(parsePlayVideo.seconds)
}
// *
player.setMuted(true)
player.play()




{/* <iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe> */}










// получить время воспроизвдения
// сожранить теу время в локал
// при перезагрузке воспроизводить с того же времени