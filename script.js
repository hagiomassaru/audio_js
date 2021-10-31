let musica = document.getElementById("musica");

// let musica1 = {
//     nome: "The Jazz Piano - Bensound",
//     fonte: "./assets/audio/bensound-thejazzpiano.mp3",
//     imagem: "./assets/img/thejazzpiano.jpg",
//     link: "https://www.bensound.com/royalty-free-music/track/the-jazz-piano",
// };
// let musica2 = {
//     nome: "ALL THAT - Bensound",
//     fonte: "./assets/audio/bensound-allthat.mp3",
//     imagem: "./assets/img/allthat.jpg",
//     link: "https://www.bensound.com/royalty-free-music/track/all-that-chill-hop",
// };
// let musica3 = {
//     nome: "JAZZ COMEDY - Bensound",
//     fonte: "./assets/audio/bensound-jazzcomedy.mp3",
//     imagem: "./assets/img/jazzcomedy.jpg",
//     link: "https://www.bensound.com/royalty-free-music/jazz",
// };
// let musica4 = {
//     nome: "JAZZY FRENCHY - Bensound",
//     fonte: "./assets/audio/bensound-jazzyfrenchy.mp3",
//     imagem: "./assets/img/jazzyfrenchy.jpg",
//     link: "https://www.bensound.com/royalty-free-music/jazz",
// };

// let lista_musicas = [musica1, musica2, musica3, musica4];

// function mudar() {
//     musica.children[0].setAttribute("src", lista_musicas[0].fonte);
//     console.log("sobre");
// }

function reproduzir() {
    musica.play();
}
function pause() {
    musica.pause();
}
function comeco() {
    pause();
    musica.currentTime = 0;

    // }
    // function avancar() {
    //     musica.arquivo.set
    //     location.reload();
    //     console.log(`avancar`);
}
