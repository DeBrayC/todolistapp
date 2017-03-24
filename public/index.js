var activeSong;
//Plays the song. Just pass the id of the audio element.

function play(song){
  console.log('does it work?');
  //Sets the active song to the song being played. All other functions depend on this.
  activeSong = document.getElementById(1);
  //Plays the song defined in the audio tag.
  activeSong.play();
// function pause(song){
//   console.log("Does Pause work");
//   activeSong = document.getElementById(1)
//
//   activeSong.pause();
// });

  //Calculates the starting volume percentage of the song.
  var percentageOfVolume = activeSong.volume / 1;
  var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;

  //Fills out the volume status bar.
  document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}
