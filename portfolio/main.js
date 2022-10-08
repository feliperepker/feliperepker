let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.hamburguer-menu')

menuToggle.addEventListener('click', () =>{
    document.body.style.overflow = show ? 'hidden' : 'initial'; 

    menuSection.classList.toggle('on', show)
    show = !show;
})


VanillaTilt.init(document.querySelector(".container-img"), {
    max: 3,
    speed: 50,
    reverse: true,
    glare: true,
    "max-glare": 0.03,
    perspective: 2000,
  });

const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 0.3){
            entry.target.classList.add('init-hidden-off')
        } 
    })
  }, {
    threshold: [0, 0.5, 1]
  })
  Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
    observer.observe(element)
  })
  