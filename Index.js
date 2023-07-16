// Lets assume that we have a Song shema with this format
// { title: “song title”, artists: [{ name: “artist name 1”}], duration: 200 }

// Create a function that
// 1. Accept a promise of Song list
// 2. Print an error message if the promise rejected.
// 3. Print all songs list if the promise is fulfilled
// In 2 version (Promise and async/await)
let songs = [{title:'Perdamaian', artist:{name:'nasidaria'},duration:'3600'}];
let [songs1, ...res] = songs;
//let song = songs;
//let [{title, artist, duration}] = songs;
//songs.push({title:'Perdamaian', artist:{name:'nasidaria'},duration:'3600'});
songs.push({title:'dia', artist:{name:'Anji'},duration:'3450'});
//console.log(song);
//console.log(songs);

//promise

let songList = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let song = null;
            if (song){
                resolve (songs);
            }else {
                reject ('Song List is Empty');
            }
        },1000);
    });
};

// songList()
// .then(result => {
//     console.log(result);
// })
// .catch(error => {
//     console.log(error);
// });

//async await
const fetchData = async () => {
    try{
        const result = await songList();
        console.log(result);
    }catch (error){
        console.log(error);
    }
};
fetchData();