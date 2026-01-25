const audio = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const volumeSlider = document.getElementById("volumeSlider");
const trackTitle = document.getElementById("trackTitle");

const tracks = [
    {title: "ずっと文化祭の準備をしていたい.mp3", src: "https://files.catbox.moe/9ubs2v.mp3"},
    {title: "afterworld.mp3", src: "https://files.catbox.moe/cssw9m.mp3"},
    {title: "f4c3.mp3", src: "https://files.catbox.moe/ckw0ma.mp3"},
    {title: "ov3rd4z.mp3", src: "https://files.catbox.moe/szsxsi.mp3"},
    {title: "drugs.mp3", src: "https://files.catbox.moe/sn936v.mp3"},
    {title: "свалка.mp3", src: "https://files.catbox.moe/3fuut0.mp3"},
    {title: "vklube.mp3", src: "https://files.catbox.moe/gafx2v.mp3"},
    {title: "цветы.mp3", src: "https://files.catbox.moe/o1lpzm.mp3"}
];

let currentTrack = 0;

audio.volume = 0.05;        
volumeSlider.value = 0.05;     

function loadTrack(index) {
    currentTrack = index;
    audio.src = tracks[currentTrack].src;
    trackTitle.textContent = "Now Playing: " + tracks[currentTrack].title;
    playPauseBtn.textContent = "▶";
}

playPauseBtn.addEventListener("click", () => {
    if(audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶";
    }
});

// prev/next
prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
});

nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
});

//громкость
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

loadTrack(currentTrack);

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekSlider.value = progress || 0;
});

seekSlider.addEventListener("input", () => {
    const time = (seekSlider.value / 100) * audio.duration;
    audio.currentTime = time;
});

console.log(
    "%c6LugnDMj9DcU4ib3JLzoyupsL5BSyyMyQ2reAPRf4RjZzNoqKV18xDjGxbGFpVjq5PvxKoxSrS4mVFitV53EKZyCPmmVJ4Zb8G9yJeFwekWny5M5AMkteAEbkgYb39Z4NPeeNJkdXbGdcNetir8j79ZrrS7hXMJYptPTvQa16A8ZnVz", 
    "color: red; font-size: 30px; font-weight: bold; background: black; padding: 10px;")

