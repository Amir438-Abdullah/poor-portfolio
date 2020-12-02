// type
new TypeIt("#element", {
    speed: 200,loop:true
  }).pause(1700).type("a Frontend developer",{delay:2000}).delete(null, {delay: 1000}).type('an UI/UX designer',{delay:2000}).go();
    
  // dark
  var Nightly = new Nightly();
  document.getElementById("dark").addEventListener("click", function(){
    Nightly.toggle();
  });  

// gsap
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({ delay: .5});
tl.from('header',{opacity:0})
tl.from('.navbar-brand',{opacity:0,scale:0})
tl.from('.nav-item',{y:10,opacity:0,stagger:.1})
tl.from('.head',{y:10,opacity:0})
tl.from('.subtitle',{opacity:0})
tl.from('.mouse',{opacity:0})
gsap.from('.title',{scrollTrigger:'.title',opacity:0,duration:1,y:40})
gsap.from('.img',{scrollTrigger:'.img',x:50,opacity:0,duration:1,delay:.5})
gsap.from(['.b','.title_skills'],{scrollTrigger:'.b',opacity:0,y:30,duration:.6})
gsap.from(['.title_xp','.e'],{scrollTrigger:'.e',opacity:0,y:30,duration:.6})
gsap.from('.social_logo',{scrollTrigger:'.social_logo',opacity:0,stagger:.1,duration:1})
// particel
particlesJS("particles-js", 
{"particles":{"number":{"value":60,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.25,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.3,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

   
    