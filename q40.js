function make_album(artist_Name, album_Title, tracks) {
    let album = {
        artist: artist_Name,
        albumTitle: album_Title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Ali", "album title 1");
let album2 = make_album("sara", "album title 2", 4);
let album3 = make_album("Danish", "album title 3");
console.log(album1);
console.log(album2);
console.log(album3);
export {};
