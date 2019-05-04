var playlist ={  
songpair:"song titles"
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, artistName, { [playlist]: songTitle})
}