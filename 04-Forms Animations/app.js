// Selecting the elements needed from the document
const containers = document.querySelectorAll('.input-container')
const form = document.querySelector('form')

// Creating a GSAP default timeline
const tl = gsap.timeline({ defaults: { duration: 1 } })

// creating Email and Phone validation functions using regular expressions
// *Note: Didn't implement them ---> grabbed them from Google*
function validateEmail(email) {
  let re = /\S+@\S+\.\S+/
  return re.test(email)
}
function validatePhone(phone) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  return re.test(phone)
}

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

  // 2. Adding the elastic effect to the input when it's focused
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

//Reverting each input placeholder animations back if it's not focused and also validating inputs
form.addEventListener('click', () => {
  //Looping through the containers and reverting the animations back if the input is not focused
  containers.forEach((container) => {
    // Selecting the elements needed from the container
    const input = container.querySelector('.input')
    const line = container.querySelector('.elastic-line')
    const placeholder = container.querySelector('.placeholder')

    // 1. Reverting placeholder animation if the input is not focused and it's empty
    if (document.activeElement !== input) {
      if (!input.value) {
        // Reverting the placeholder back to the start position
        gsap.to(placeholder, {
          top: 0,
          left: 0,
          scale: 1,
          duration: 0.5,
          ease: 'Power2.easeOut',
        })
      }
    }

    // 2. colorizing the line and the placeholder based on the input validation
    input.addEventListener('input', (e) => {
      // creating colors constants
      const validColor = '#6391E8'
      const invalidColor = '#FE8C99'
      // creating a function to colorize the line and the placeholder
      function colorize(color, line, placeholder) {
        gsap.to(line, { stroke: color, duration: 0.5 })
        gsap.to(placeholder, { color: color, duration: 0.5 })
      }

      // 2.1 Name Validation
      if (e.target.type === 'text') {
        let inputText = e.target.value
        if (inputText.length > 2) {
          colorize(validColor, line, placeholder)
        } else {
          colorize(invalidColor, line, placeholder)
        }
      }
      // 2.2 Email Validation
      if (e.target.type === 'email') {
        let valid = validateEmail(e.target.value)
        if (valid) {
          colorize(validColor, line, placeholder)
        } else {
          colorize(invalidColor, line, placeholder)
        }
      }
      // 2.3 Phone Validation
      if (e.target.type === 'tel') {
        let valid = validatePhone(e.target.value)
        if (valid) {
          colorize(validColor, line, placeholder)
        } else {
          colorize(invalidColor, line, placeholder)
        }
      }
    })
  })
})

// Adding fill animation to the checkbox as it is being checked and unchecked
// Selecting the checkbox and the tick mark path
const checkbox = document.querySelector('.checkbox')
const tickMarkPath = document.querySelector('.tick-mark path')
// Getting the length of the tick mark path
const pathLength = tickMarkPath.getTotalLength()
// Creating a GSAP timeline for the checkbox fill animation
const tl2 = gsap.timeline({
  defaults: { duration: 0.5, ease: 'Power2.easeOut' },
})
// setting the strokeDasharray to the pathLength to make the path visible --> check the SVG documentation
gsap.set(tickMarkPath, {
  strokeDashoffset: pathLength,
  strokeDasharray: pathLength,
})
// Adding the fill animation to the checkbox
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    // animate the checkbox fill to the top
    tl2.to('.checkbox-fill', { top: '0%' })
    // animate the tick mark path to the end to make it visible
    tl2.fromTo(
      tickMarkPath,
      // using the strokeDashoffset property to animate the path
      { strokeDashoffset: pathLength },
      { strokeDashoffset: 0 },
      '<50%'
    )
    // animate the label color to the blue color
    tl2.to('.checkbox-label', { color: '#6391e8' }, '<')
  } else {
    // animate the checkbox fill back to the bottom
    tl2.to('.checkbox-fill', { top: '100%' })
    // animate the tick mark path back to the start to make it invisible
    tl2.fromTo(
      tickMarkPath,
      { strokeDashoffset: 0 },
      { strokeDashoffset: pathLength },
      '<50%'
    )
    // animate the label color back to the default
    tl2.to('.checkbox-label', { color: '#c5c5c5' }, '<')
  }
})
