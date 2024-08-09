const songList = [
    { name: "Where we Started", artist: "No Copyright Sounds", src: "Assets/1.mp3", cover: "Assets/1.jpg" },
    { name: "Under the Influence", artist: "Chris Brown", src: "Assets/2.mp3", cover: "Assets/2.jpg" },
    { name: "After Hours", artist: "The Weeknd", src: "Assets/3.mp3", cover: "Assets/3.jpg" }
  ];
  
  const artistName = document.querySelector('.artist');
  const musicName = document.querySelector('.songname');
  const fillBar = document.querySelector('.fillbar');
  const time = document.querySelector('.time');
  const coverImg = document.getElementById('cover');
  const playBtn = document.getElementById('play');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const prog = document.querySelector('.progress-bar');
  
  let song = new Audio();
  let currentSong = 0;
  let playing = false;
  
  document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglePlayPause);
    prog.addEventListener('click', seek);
  });
  
  function loadSong(index) {
    const { name, artist, src, cover: thumb } = songList[index];
    artistName.innerText = artist;
    musicName.innerText = name;
    song.src = src;
    coverImg.style.backgroundImage = `url(${thumb})`;
    coverImg.classList.remove('rotate');
  }
  
  function updateProgress() {
    if (song.duration) {
      const pos = (song.currentTime / song.duration) * 100;
      fillBar.style.width = `${pos}%`; 
      const duration = formatTime(song.duration);
      const currentTime = formatTime(song.currentTime);
      time.innerText = `${currentTime}-${duration}`;
    }
  }
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const formattedSeconds = secs < 10 ? '0' + secs : secs;
    return minutes === 0 ? '0:' + formattedSeconds : `${minutes}:${formattedSeconds}`;
  }
  
  function togglePlayPause() {
    if (playing) {
      song.pause();
      coverImg.classList.remove('rotate');
    } else {
      song.play();
      coverImg.classList.add('rotate');
    }
    playing = !playing;
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);
    coverImg.classList.toggle('active', playing);
  }
  
  function nextSong() {
    currentSong = (currentSong + 1) % songList.length;
    playMusic();
  }
  
  function prevSong() {
    currentSong = (currentSong - 1 + songList.length) % songList.length;
    playMusic();
  }
  
  function playMusic() {
    loadSong(currentSong);
    song.play();
    playing = true;
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    coverImg.classList.add('active');
    coverImg.classList.add('rotate');
  }
  
  function seek(e) {
    const pos = (e.offsetX / prog.clientWidth) * song.duration;
    song.currentTime = pos;
  }

  const volumeSlider = document.querySelector('.volume-slider');
const volumeIcon = document.querySelector('.volume-control i');

volumeSlider.addEventListener('input', (e) => {
  song.volume = e.target.value / 100;
  updateVolumeIcon();
});

function updateVolumeIcon() {
  if (song.volume === 0) {
    volumeIcon.classList.remove('fa-volume-up');
    volumeIcon.classList.add('fa-volume-off');
  } else if (song.volume < 0.5) {
    volumeIcon.classList.remove('fa-volume-up');
    volumeIcon.classList.add('fa-volume-down');
  } else {
    volumeIcon.classList.remove('fa-volume-down');
    volumeIcon.classList.add('fa-volume-up');
  }
}