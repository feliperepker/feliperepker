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
  

var test =  Array.from(document.querySelectorAll('.skills-card'))
var textSkills = document.querySelector('#skills-text')
 test.forEach(card => {
  card.addEventListener('click', () => {
   if (card == test[0]){
    textSkills.innerHTML = "HTML was the first skill that I learned, I used in a lot of my projects, in one project expecific a learn a lot of HTML in how to create a form. It's not easy to learn about DOM elements and how to integrate them with JS."
   }
   if(card == test[1]){
    textSkills.innerHTML = "I love CSS so much, It's facinating what we can do with CSS. I try to do a lot of animations and things that I don't use before to learn more and more about CSS."
   }
   if(card == test[2]){
    textSkills.innerHTML = "I used a lot of SCSS in my projects, it's easiear to create variables with SCSS and to interact with DOM elements. It's so good how you can keep your files organized with SCSS."
   }
   if(card == test[3]){
    textSkills.innerHTML = "React is new for me, I learned a little in a recent project and I'm trying to use more in everything I do."
   }
   if(card == test[4]){
    textSkills.innerHTML = "I'm learning Back-end Python in EBAC, using Django, Ngnix, Gunicorn and integrate this in a Virtual Box machine using Linux."
   }
   if(card == test[5]){
    textSkills.innerHTML = "Part of my course in EBAC teach's SQL to create a database, relations and use the back-end to interact with the data source."
   }
  })
})