let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.hamburguer-menu')

menuToggle.addEventListener('click', () =>{
    document.body.style.overflow = show ? 'hidden' : 'initial'; 

    menuSection.classList.toggle('on', show)
    show = !show;
})


VanillaTilt.init(document.querySelector(".container-img"), {
    max: 10,
    speed: 200,
    reverse: true,
    glare: true,
    "max-glare": 0.1,
    perspective: 2000,
  });