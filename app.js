const mobileImage=[
    "./images/mobile/image-deep-earth.jpg",
    "./images/mobile/image-night-arcade.jpg",
    "./images/mobile/image-soccer-team.jpg",
    "./images/mobile/image-grid.jpg",
    "./images/mobile/image-from-above.jpg",
    "./images/mobile/image-pocket-borealis.jpg",
    "./images/mobile/image-curiosity.jpg",
    "./images/mobile/image-fisheye.jpg"
];
const desktopImage=[
    "./images/desktop/image-deep-earth.jpg",
    "./images/desktop/image-night-arcade.jpg",
    "./images/desktop/image-soccer-team.jpg",
    "./images/desktop/image-grid.jpg",
    "./images/desktop/image-from-above.jpg",
    "./images/desktop/image-pocket-borealis.jpg",
    "./images/desktop/image-curiosity.jpg",
    "./images/desktop/image-fisheye.jpg"
];


const pics=document.querySelectorAll('.pics');

let i=0;
window.addEventListener('resize',()=>{
    if(window.innerWidth<= 550){
        i=0;
        pics.forEach((pic)=>{
    
            // console.log(mobileImage[i++]);
            pic.src= mobileImage[i++];
        });
    }
    else{
        i=0;
        pics.forEach((pic)=>{
    
            pic.src= desktopImage[i++];
        });
    }
    
});
const cross =document.querySelector('.cross');
const bar =document.querySelector('.bar');
const headerLinks=document.querySelector('.header-links');
 bar.addEventListener('click',()=>{
     if(headerLinks.style.visibility==='visible'){
        headerLinks.style.visibility='hidden';
     }
     else{
        headerLinks.style.visibility='visible';

     }

 });