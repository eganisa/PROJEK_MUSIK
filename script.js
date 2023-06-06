const poster = document.querySelector('.poster');
let i = 0;
gambar = [1,2,3,4,5,6,7,8,9]
setInterval(function(){
    poster.style.backgroundImage = 'url(media/img/gambar' + gambar[i++] + '.jpg';
    if(i == gambar.length) i = 0;
}, 3000);