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

// Animating the Home SVG element
// 1. setting some initial styles of feather
gsap.set('.feather', { scale: 0, transformOrigin: 'center' })
// 2. triggering the animation on the home click
home.addEventListener('click', () => {
  // whole home animation
  gsap.fromTo(
    '.home-svg',
    { scale: 1 },
    {
      scale: 0.9,
      yoyo: true,
      repeat: 1,
    }
  )
  // feather animation
  gsap.fromTo(
    '.feather',
    {
      y: -5,
      scale: 0,
    },
    {
      y: 20,
      scale: 1.5,
      duration: 1,
      stagger: 0.2,
    }
  )
  // right feather nimation
  gsap.fromTo('.right-feather', { x: 0 }, { x: 5 })
})
