// Selecting the elements needed from the document
const containers = document.querySelectorAll('.input-container')
const form = document.querySelector('form')

// Creating a GSAP default timeline
const tl = gsap.timeline({ defaults: { duration: 1 } })

// creating start and end positions for the line svg to achieve the elastic effect
// *Note: the values are hardcoded and got from figma design made by the course author*
const start =
  'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512'
const end =
  'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512'

// Looping through the containers and adding the elastic effect to each one being focused

containers.forEach((container) => {
  // 1. Selecting the elements needed from the container
  const input = container.querySelector('.input')
  const line = container.querySelector('.elastic-line')
  const placeholder = container.querySelector('.placeholder')

  input.addEventListener('focus', () => {
    //Checking to see if there is any text in the input
    if (!input.value) {
      tl.fromTo(
        // Animating this specific line from the start to the end
        line,
        // manipulating the line's "d" attribute in the path --> check the SVG documentation
        { attr: { d: start } },
        {
          attr: { d: end },
          ease: 'Power2.easeOut',
          duration: 0.75,
        }
      )
      tl.to(
        // Animating the line back to the start position to achieve the elastic bounce effect
        line,
        {
          attr: { d: start },
          ease: 'elastic.out(3,0.5)', // using GSAP cutom ease to achieve the bounce effect
        },
        '<50%'
      )
      //Placeholder Shift
      tl.to(
        placeholder,
        {
          top: -15,
          left: 0,
          scale: 0.7,
          duration: 0.5,
          ease: 'Power2.easeOut',
        },
        '<15%' // the delay before it moves up --> the value was found by trial and error, it made it act as the line was hitting it to move it up
      )
    }
  })
})
