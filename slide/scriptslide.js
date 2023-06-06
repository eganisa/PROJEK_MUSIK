const tpodium = document.querySelector('.podium')
const podium = document.querySelector('.ipodium');
const pilihan = document.querySelectorAll('.thumbnail');
const play  = document.querySelector('.play');
const music = document.querySelector('.music');
const close = document.querySelector('.podium h6');
const judul = document.querySelector('.judul p');
const next = document.querySelectorAll('.next');

play.addEventListener('click', function(){
    if(music.paused){
        music.play();
    }
    else{
        music.pause();
    }
});

pilihan.forEach(function(ev){
    ev.addEventListener('click', function(e){
        podium.style.backgroundImage = 'url(' + e.target.src + ')';

        music.setAttribute('src', '../media/music/music' + e.target.className + '.mp3');
        music.play();

        tpodium.style.display = 'inline-block';
        judul.innerHTML = e.target.name;
    });
});

close.addEventListener('click', function(){
    tpodium.style.display = 'none';
});