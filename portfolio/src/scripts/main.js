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
        if(entry.intersectionRatio >= 0.05){
            entry.target.classList.add('init-hidden-off')
        } 
    })
  }, {
    threshold: [0, 0, 0.1]
  })
  Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
    observer.observe(element)
  })
var anotherCounter = 0;
var counter = 0;
var oldCard;
var containerCards = document.querySelector('.container-skills')
var project = document.querySelector('.transition-text')
var arrayCards =  Array.from(document.querySelectorAll('.skills-card'))
var textSkills = document.querySelector('#skills-text')


var x = window.matchMedia("(max-width: 1000px)")

arrayCards.forEach(card => {
  card.addEventListener('click', () => {
    project.style.opacity = 0;
    oldCard != card && counter == 2 ? counter = 0 : anotherCounter 
    if(x.matches){
      if(counter == 0){
          containerCards.classList.remove('transition')
          containerCards.classList.add('transform') 
        }
    }
   
    setTimeout(() => {
      if(x.matches){
          if(counter == 0){
          containerCards.classList.add('transition')
          containerCards.classList.remove('transform')
          textSkills.classList.add('plus-height')
          counter = 1;
         }
      }
      
      if (oldCard == card){
        textSkills.innerHTML = "Choose another skill"
        
        if(x.matches && counter == 1){
          
            containerCards.classList.remove('transition')
            containerCards.classList.add('transform-back') 
            counter = 2
            setTimeout(() => {
              containerCards.classList.add('transition')
              containerCards.classList.remove('transform-back') 
              textSkills.classList.remove('plus-height') 
            },700)
            }
       
      }else{
        if (card == arrayCards[0]){
          textSkills.innerHTML = "HTML was the first skill that I learned, I used in a lot of my projects, in one project specific a learn a lot of HTML in how to create a form.The challege is learning about DOM elements and how to integrate them with JS."
        }
        if(card == arrayCards[1]){
          textSkills.innerHTML = "I love CSS, It's facinating what we can do with CSS. I try to do a lot of animations and things that I don't use before to learn more and more about CSS."          
        }
        if(card == arrayCards[2]){
          textSkills.innerHTML = "I used a lot of SASS in my projects, it's easiear to create variables with SASS and to interact with DOM elements. It's so good how you can keep your files organized with SASS too."
        }
        if(card == arrayCards[3]){
          textSkills.innerHTML = "React is new for me, I learned a little in a recent project and I'm trying to use more in everything I do."
        }
        if(card == arrayCards[4]){
          textSkills.innerHTML = "I'm learning Back-end Python in EBAC, using Django, Ngnix, Gunicorn and upload this in a Virtual Box machine using Linux."       
        }
        if(card == arrayCards[5]){
          textSkills.innerHTML = "Part of my course in EBAC teach's SQL to create a database, relations and use the back-end to interact with the data source."   
        }
      }
      
      oldCard = card;
      project.style.opacity = 1;
   }, 700)
   
  })
})


var coffe = document.querySelector('.cupCoffe')
var sorry = document.querySelector('.sorry')
coffe.addEventListener('click', ()=>{
  console.log('oi')
  coffe.classList.add('animationcoffe')
  sorry.classList.remove('hide')
})
  const anchor = document.querySelector('.stars');
  const astronaut = document.querySelector('.last-astronaut')
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

document.addEventListener('mousemove', (e) =>{
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

 
  astronaut.style.transform = `rotate(${ angleDeg}deg)`;
})

function angle(cx, cy, ex, ey){
  const dy = ey - cy;
  const dx = ex - cx;
  const rad =Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}