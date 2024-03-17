// create a default timeline for the animations ---> tl stands for timeline
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'power1.out' } })

// animate the cookie container
tl.fromTo(
  '.cookie-container',
  { scale: 0 },
  { scale: 1, ease: 'elastic.out(1, 0.4)', duration: 1.5 } // the elastic.out is a custom ease from the GSAP library
)
// animate the cookie itself
tl.fromTo(
  '.cookie',
  { opacity: 0, x: -50, rotation: '-45deg' },
  { opacity: 1, x: 0, rotation: '0deg' },
  '<50%'
) // '<50%' means it will start at 50% of the previous animation
// animate the text
tl.fromTo('.text', { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, '<') // '<' means it will start at the same time as the previous animation


//Fading the cookie out when the button is clicked
const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.45, ease: 'power1.out'})
})
