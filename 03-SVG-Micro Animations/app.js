// Creating a default timeline with GSAP for the SVG animation
const tl = gsap.timeline({
  defaults: {
    duration: 0.35,
    ease: 'Power2.out',
  },
})

// selecting the three SVG elements from the document
const home = document.querySelector('.home')
const notifications = document.querySelector('.notifications')
const messages = document.querySelector('.messages')

