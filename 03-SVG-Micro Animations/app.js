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
gsap.set('.feather', { scale: 0, transformOrigin: 'center' }) // so that the feather starts not visible and grows from the center
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
      stagger: 0.2, // to animate the feathers one after the other
    }
  ) // Now they will animate like they are falling down
  // right feather nimation
  gsap.fromTo('.right-feather', { x: 0 }, { x: 5 })
}) // one of the feather will fall to the right

// Animating the Notifications SVG element
// 1. setting transform origin of bell, wave and ringer
gsap.set('.bell', { transformOrigin: 'top center' })
gsap.set('.wave', { opacity: 0, transformOrigin: 'bottom' })
gsap.set('.ringer', { transformOrigin: 'top center' })
// 2. triggering the animation on the notifications click
notifications.addEventListener('click', () => {
  gsap.fromTo(
    // body of the bell animation
    '.bell',
    { rotation: -5 },
    {
      rotation: 0,
      duration: 2,
      ease: 'elastic.out(5, 0.2)', // for the bounce effect
    }
  )
  gsap.fromTo(
    // ringer animation
    '.ringer',
    {
      rotation: -3,
      x: 0.5,
    },
    {
      rotation: 0,
      x: 0,
      duration: 1,
      ease: 'elastic.out(5, 0.2)',
    }
  )
  gsap.fromTo(
    // wave animation
    '.wave',
    {
      scale: 0,
      opacity: 1,
    },
    {
      scale: 1.3,
      opacity: 0,
      duration: 1,
    }
  )
})
