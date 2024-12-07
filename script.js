document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector('.loader');
  const body = document.body;

  // Disable scrolling
  body.style.overflow = 'hidden';

  // Simulate content loading (e.g., 3 seconds delay)
  setTimeout(() => {
    // Slide the loader up by changing its style
    loader.style.transform = 'translateY(-100%)';
    loader.style.opacity = '0';
    loader.style.transition = 'transform 0.8s ease, opacity 0.8s ease';

    // Optional: Remove the loader from the DOM after the animation is complete
    setTimeout(() => {
      loader.style.display = 'none';
      // Enable scrolling
      body.style.overflowY = 'auto';
    }, 800); // Match the duration of the transition
  }, 2300); // Adjust this delay as per your content loading time
});


// Wait for the document to load
window.addEventListener('load', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    // Create a scroll trigger to hide the navbar when scrolling down
    let lastScroll = 0; // Track last scroll position
  
    gsap.to('.navbar', {
      yPercent: -100, // Slide the navbar up
      scrollTrigger: {
        trigger: '.navbar',
        start: 'top top', // Trigger when the navbar hits the top
        end: 'bottom top', // Trigger when the bottom of the navbar hits the top
        scrub: true, // Smoothly animate as the user scrolls
        toggleActions: 'play reverse play reverse', // Play animation on scroll down and reverse on scroll up
        markers: false, // Set to true if you want to see markers for debugging
      },
    });
  });
  

  window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate navbar on page load
    gsap.from('.navbar', {
      opacity: 0,
      y: -30,
      duration: 0.5,
      delay: 2.6,
      ease: 'power4.out',
    });

    // Animate other elements one by one (for example, items in the nav-links)
    gsap.from('.nav-links li', {
      opacity: 0,
      y: -30,
      duration: 0.4,
      delay: 2.5, // Start after navbar animation
      stagger: 0.3, // Delay between each item
      ease: 'power4.out',
    });


    gsap.from('.box', {
        opacity: 0,
        y: -30,
        duration: 0.3,
        delay: 0.1, // Adjust to start after nav-links
        ease: 'power4.out',
      },"sh");
});

  
    window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate social icons
    
    // Animate page introduction (Hi, my name is ...)
    gsap.from('.page1 h1', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: 0.1,
      ease: 'power4.out',
    },"aa");
    gsap.from('.page1 h2', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: 0.1,
      ease: 'power4.out',
    },"aa");

    // Animate animated text container (I am a developer)
    gsap.from('.page1 h3', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: 0.1,
      ease: 'power4.out',
    },"aa");

    // Animate paragraph text (description)
    gsap.from('.page1 p', {
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: 0.1,
      ease: 'power4.out',
    },"aa");

    // Animate "Contact me" button
    gsap.from('.contact', {
      opacity: 0,
      scale: 0.2,
      duration: 0.5,
      delay: 0.1,
      ease: 'power4.out',
    },"aa");

    // Animate profile section with background circles and image
    gsap.from('.profilecontainer', {
      opacity: 0,
      scale: 0.3,
      duration: 0.5,
      delay: 0.1,
      ease: 'power4.out',
    },"aa");

    gsap.from('.socialicondesign ', {
        opacity: 0,
        y: 65,
        duration: 0.5,
        stagger: 0.3,
        delay: 0.2,
        ease: 'power4.out',
      },"aa");
  
      // Animate email section
      gsap.from('.email ', {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: 0.2,
        ease: 'power4.out',
      },"aa");
  

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



  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  let navbar = document.querySelector('.navbar');

  // Create a ScrollTrigger instance
  ScrollTrigger.create({
    start: 'top top', // Trigger at the top of the page
    end: 99999, // Keep the trigger active for the entire page
    onUpdate: (self) => {
      if (self.direction === -1) {
        // Scroll up: Show navbar
        gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power2.out' });
      } else {
        // Scroll down: Hide navbar
        gsap.to(navbar, { y: '-100%', duration: 0.3, ease: 'power2.out' });
      }
    },
  });







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

// Optionally, you can use the window scroll event to highlight the active link, if you have a navigation menu
window.addEventListener('scroll', function () {
  // If you have a navigation link that should be highlighted, add your active class logic here
  // For example, you can check if page4 is in view and highlight the corresponding nav link
});
