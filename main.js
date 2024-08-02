


var slides=document.querySelectorAll('.tiile-animation p');
var slideIndex=0;
slides[slideIndex].classList.add('visible');

setInterval(function(){
    slides[slideIndex].classList.remove('visible');
    slides[slideIndex].classList.add('hedden');
    slideIndex=(slideIndex + 1)% slides.length;
    slides[slideIndex].classList.remove('hedden');
    slides[slideIndex].classList.remove('visible');
    
},2000);
let menu=document.getElementById('menu-icon');

menu.addEventListener('click', function() {
  const nav = document.getElementById('nav');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
});


let listVideo=document.querySelectorAll('.video-list .vid');
let mainVideo=document.querySelector('.main-video video');
let title=document.querySelector('.main-video .title');

listVideo.forEach(video=>{
  video.onclick = () =>{
    listVideo.forEach(vid => vid.classList.remove('active'));
    video.classList.add('active');
    if(video.classList.contains('active')){
      let src = video.children[0].getAttribute('src');
      mainVideo.src=src;
      let text= video.children[1].innerHTML;
      title.innerHTML=trxt;
    }
  }
 })


