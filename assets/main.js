 	//cross watch now 
  function setVisibility(id,visibility) {
    document.getElementById(id).style.display=visibility;
   }


 	//video play pause 

// Get all video elements and play/pause buttons
const videoElements = document.querySelectorAll('video');
const playPauseButtons = document.querySelectorAll('.video-control');

// Add event listeners for each video
videoElements.forEach((videoElement, index) => {
  const button = playPauseButtons[index];

  button.addEventListener('click', () => {
    button.classList.toggle('playing');
    if (button.classList.contains('playing')) {
      videoElement.play();
      console.log('clicked');
    } else {
      videoElement.pause();
      console.log('paused');
    }
  });

  videoElement.addEventListener('ended', () => {
    button.classList.remove('playing');
  });
});





  


