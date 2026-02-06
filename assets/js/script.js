window.onload = function () {
  // Set a timeout to simulate loading time
  setTimeout(function () {
    const loader = document.getElementById('loader');
    
    // Animate the loader upwards
    loader.style.transform = 'translateY(-100%)';
    loader.style.opacity = '0';
    loader.style.transition = 'transform 1s ease-in-out, opacity 0.5s ease-in-out';

    // After the animation ends, hide the loader and show the content
    loader.addEventListener('transitionend', function () {
      loader.style.display = 'none';
      document.getElementById('content').style.display = 'block';
      
       document.getElementById('page3').style.opacity = '1';
      // Create a GSAP timeline for all animations with a 3-second delay
      const tl = gsap.timeline(); // 0.2s delay before starting the animations

      // Animating the navbar with stagger
      tl.from(".navbar", {
        opacity: 0, 
        y: -10, 
        duration: 0.3, 
        ease: "power2.out"
      })
      
      .from(".logo", {
        opacity: 0, 
        y: -20, 
        duration: 0.3, 
        stagger: 0.1, // Stagger each list item's animation by 0.1 seconds
        ease: "power2.out"
      }, "shh")
      .from(".nav-links li", {
        opacity: 0, 
        y: -20, 
        duration: 0.3, 
        stagger: 0.1, // Stagger each list item's animation by 0.1 seconds
        ease: "power2.out"
      }, "shh")

      .from(".box", {
        opacity: 0, 
        y: -20, 
        duration: 0.3, 
        stagger: 0.1, // Stagger each list item's animation by 0.1 seconds
        ease: "power2.out"
      }, "shh")
         // Animating other page elements
      .from("#page1 h1", {
        opacity: 0, 
        y: 50, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from("#page1 h2", {
        opacity: 0, 
        y: 50, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from("#page1 h3", {
        opacity: 0, 
        y: 50, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from("#page1 p", {
        opacity: 0, 
        y: 50, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from(".animated-text-container", {
        opacity: 0, 
        y: 50, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from(".contact", {
        opacity: 0, 
        y: 50, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from(".profilecontainer", {
        opacity: 0, 
        scale: 0.5, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from(".socialicondesign", {
        opacity: 0, 
        scale: 0.5, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh")
      .from(".email", {
        opacity: 0, 
        scale: 0.5, 
        duration: 0.5, 
        ease: "power2.out"
      }, "sh");
    });
  }, 1000); // 3 seconds delay before starting the animations

};






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

// ===== PAGE 2: SKILLS ANIMATION =====
// Animate skill cards when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillCard = entry.target;
      
      // Animate the card
      gsap.from(skillCard, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out"
      });

      // Stop observing this element
      skillObserver.unobserve(skillCard);
    }
  });
}, observerOptions);

// Observe all skill cards
document.querySelectorAll('.skill-card').forEach(card => {
  skillObserver.observe(card);
});

// Add interactive click effect
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', function() {
    // Add pulse animation on click
    gsap.to(this, {
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });
  });
});

// Animate page2 header on scroll into view
const page2Header = document.querySelector('.skills-header');
const page2Observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.from('.skills-title', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.out"
      });
      gsap.from('.skills-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
      });
      page2Observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (page2Header) {
  page2Observer.observe(page2Header);
}
