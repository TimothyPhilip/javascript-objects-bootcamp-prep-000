var playlist = {
artistname: 'song title'  
}


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, artistName, 
  { [songTitle]: playlist })
}