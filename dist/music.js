const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Where'd You Go",
        artist: "Fort Minor / Skylar Grey",
        url: '/music/Fort Minor - Where\'d You Go.mp3',
        cover: '/music/Where\'d You Go.jpg',
      },
      {
        name: "Yellow",
        artist: "Coldplay",
        url: '/music/Coldplay - Yellow.mp3',
        cover: '/music/Coldplay - Yellow.jpg',
      }
    ]
});