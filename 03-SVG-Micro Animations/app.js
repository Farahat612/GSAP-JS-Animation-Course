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

// Animating the Messages SVG element
// 1. setting transform origin of the envelope
gsap.set('.flap', { transformOrigin: 'top' })
// 2. triggering the animation on the messages click
messages.addEventListener('click', () => {
  // whole envelope animation
  tl.fromTo('.messages-svg', { scale: 1 }, { scale: 0.9 })
  // flap animation
  tl.fromTo(
    '.flap',
    { scale: 1 },
    { scale: -1 }, // scaling the flap to 0 then to -1 to make it look like it's opening
    '<50%' // starting the flap opening animation at 50% of the timeline starts
  )
  // envelope back animation
  tl.fromTo(
    '.messages-svg',
    { scale: 0.9 },
    { scale: 1 }, // scaling the envelope back to 1 after the flap opening
    '<50%'
  )
  // note animation
  tl.fromTo(
    '.note',
    { y: 0, opacity: 1 },
    {
      y: -40,
      opacity: 0,
      duration: 0.75,
    }
  )
  // Animating the flap back to the original position as it is closing
  tl.to(
    '.flap',
    { scale: 1 },
    '<50%' // so it starts closing after 50% of the prev animation
  )
})
