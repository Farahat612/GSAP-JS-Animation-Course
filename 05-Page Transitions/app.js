// Creating GSAP timelines for leave and enter
const tlLeave = gsap.timeline({
  defaults: {
    duration: 0.85,
    ease: 'power2.easeOut',
  },
})
const tlEnter = gsap.timeline({
  defaults: {
    duration: 0.85,
    ease: 'power2.easeOut',
  },
})

// Creating functions for leave and enter transitions
// 1. Leave Animation
const leaveAnimation = (current, done) => {
  // Selecting elements to animate
  const productImg = current.querySelector('.image-container')
  const text = current.querySelector('.showcase-text')
  const circles = current.querySelectorAll('.circle')
  const arrow = current.querySelector('.showcase-arrow')
  return (
    // Animating arrow
    tlLeave.fromTo(
      arrow,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: 50,
      }
    ),
    // Animating product img
    tlLeave.fromTo(
      productImg,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: 100,
      },
      '<'
    ),
    // Animating text
    tlLeave.fromTo(
      text,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: 100,
        onComplete: done,
      },
      '<'
    ),
    // Animating circles
    tlLeave.fromTo(
      circles,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -200,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        duration: 1,
      },
      '<'
    )
  )
}

// 2. Enter Animation
const enterAnimation = (current, done, gradient) => {
  // Selecting elements to animate
  const productImg = current.querySelector('.image-container')
  const text = current.querySelector('.showcase-text')
  const circles = current.querySelectorAll('.circle')
  const arrow = current.querySelector('.showcase-arrow')
  return (
    // Animating arrow
    tlEnter.fromTo(
      arrow,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    ),
    // Animating product img
    tlEnter.fromTo(
      productImg,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
      },
      '<'
    ),
    // Animating text
    tlEnter.fromTo(
      text,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        onComplete: done,
      },
      '<'
    ),
    // Animating circles
    tlEnter.fromTo(
      circles,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        duration: 1,
      },
      '<'
    ),
    // Changing background gradient
    tlEnter.to(
      'body',
      {
        background: gradient,
      },
      '<'
    )
  )
}

// Changing Gradient Background on page change
// Creating a function tha returns the gradient of each page
const getGradient = (name) => {
  switch (name) {
    case 'handbag':
      return 'linear-gradient(260deg, #b75d62 , #754d4f)'
    case 'boot':
      return 'linear-gradient(260deg, #5d8cb7 , #4c4f70)'
    case 'hat':
      return 'linear-gradient(260deg, #b27a5c , #7f5450)'
  }
}


// Initializing Page Transitions Animations using Barbajs
barba.init({
  preventRunning: true,
  transitions: [
    // Showcase Section transitions
    {
      name: 'default-transition',
      once(data) {
        const done = this.async()
        let nextContainer = data.next.container
        let pageGradient = getGradient(data.next.namespace)
        gsap.set('body', { background: pageGradient })
        enterAnimation(nextContainer, done, pageGradient)
      },
      leave(data) {
        const done = this.async()
        let currentContainer = data.current.container
        leaveAnimation(currentContainer, done)
      },
      enter(data) {
        const done = this.async()
        let nextContainer = data.next.container
        let pageGradient = getGradient(data.next.namespace)
        enterAnimation(nextContainer, done, pageGradient)
      },
    },
  ],
})

