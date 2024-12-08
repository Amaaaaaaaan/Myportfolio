document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector('.loader');
  const body = document.body;

  // Disable scrolling while loading
  body.style.overflow = 'hidden';

  // Loader animation and removal
  setTimeout(() => {
    loader.style.transform = 'translateY(-100%)';
    loader.style.opacity = '0';
    loader.style.transition = 'transform 0.8s ease, opacity 0.8s ease';

    setTimeout(() => {
      loader.remove(); // Completely remove loader
      body.style.overflowY = 'auto'; // Enable scrolling
    }, 800); // Match the transition duration
  }, 2300);
});

window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Scroll-triggered navbar hide/show
  gsap.to('.navbar', {
    yPercent: -100,
    scrollTrigger: {
      trigger: '.navbar',
      start: 'top top',
      end: '+=200',
      scrub: true,
    },
  });

  // Timeline for page animations
  const tl = gsap.timeline({
    delay: 2.5, // Align animations to start after the loader
  });

  // Navbar animation
  tl.from('.navbar', {
    opacity: 0,
    y: -25,
    duration: 0.6,
    ease: 'power4.out',
  })
    .from('.nav-links li', {
      opacity: 0,
      y: -30,
      stagger: 0.2,
      ease: 'power4.out',
    }, '-=0.4') // Overlap slightly with navbar animation

    // Page 1 elements (Headings, Paragraphs)
    .from('.page1 h1, .page1 h2, .page1 h3, .page1 p', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power4.out',
    }, '-=0.2') // Slight overlap for smoother transition

    // Profile container animation
    .from('.profilecontainer', {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: 'power4.out',
    }, 'sh') // Aligned with page elements

    // Contact section animation
    .from('.contact', {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'power4.out',
    }, 'sh') // Slightly after profile container

    // Social icons
    .from('.socialicondesign', {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.6,
      ease: 'power4.out',
    }, '-=0.3')

    // Email animation
    .from('.email', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power4.out',
    }, '-=0.4');
});


  // Words to cycle through
  const words = ["MERN Developer.", "Tech Enthusiast.", "Programmer."];
    
  // Variables for handling animation state
  let currentWordIndex = 0;
  let letterIndex = 0;
  let isTyping = true; // Flag to track typing or backspacing
  const speed = 100; // Speed of typing effect
  const backspaceSpeed = 50; // Speed of backspacing effect
  const pauseTime = 1000; // Pause time before switching words
  const element = document.querySelector(".animated-words");

  // Function to type and backspace each word
  function typeWord() {
      return new Promise(resolve => {
          let interval;
          // Typing animation for the current word
          if (isTyping) {
              interval = setInterval(() => {
                  element.textContent = words[currentWordIndex].substring(0, letterIndex);
                  letterIndex++;

                  if (letterIndex > words[currentWordIndex].length) {
                      clearInterval(interval); // Stop typing interval
                      setTimeout(() => {
                          isTyping = false; // Switch to backspacing after typing is done
                          resolve(); // Continue to backspacing
                      }, pauseTime); // Wait before starting backspace
                  }
              }, speed);
          } else {
              // Backspacing effect
              interval = setInterval(() => {
                  element.textContent = words[currentWordIndex].substring(0, letterIndex);
                  letterIndex--;

                  if (letterIndex === 0) {
                      clearInterval(interval); // Stop backspacing interval
                      isTyping = true; // Switch to typing the next word
                      currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle to next word
                      resolve(); // Continue to the next word
                  }
              }, backspaceSpeed);
          }
      });
  }

  // Start the typing and backspacing animation
  async function startTyping() {
      while (true) {
          await typeWord(); // Wait for typing/backspacing cycle to complete
      }
  }

  startTyping(); // Start animation when page loads



  






// Get all nav links and sections
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('div[id^="page"]');  // Match all divs with id starting with 'page'

// Function to add active class to the link
function setActiveLink() {
  let currentSection = '';

  // Loop through sections to check which one is in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50; // Adjust for offset if needed
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.getAttribute('id');
    }
  });

  // Highlight the active nav link
  navLinks.forEach(link => {
    link.classList.remove('active'); // Remove 'active' from all links
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active'); // Add 'active' to the current link
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', setActiveLink);

// Handle click events to scroll to the corresponding section
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const targetId = link.getAttribute('href').substring(1); // Get the target id
    const targetSection = document.getElementById(targetId); // Get the target section
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
  });
});


// Get the "Contact me" button and the target section (page4)
const contactBtn = document.getElementById('contactBtn');
const page4 = document.getElementById('page4');

// Add event listener to handle smooth scrolling when clicking the "Contact me" button
contactBtn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default behavior of link click
  
  // Scroll to page4 smoothly
  page4.scrollIntoView({ behavior: 'smooth' });
});
