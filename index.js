// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuCenter = document.querySelector('.menu-center');
hamburgerMenu.addEventListener('click', () => {
    menuCenter.classList.toggle('show');
}); 


// Add click event listener to navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href');
      const duration = 1000; // Adjust this value to control scroll speed
      smoothScroll(target, duration);
    });
  });
 


// Smooth scroll function
function smoothScroll(target, duration) {
  const targetSection = document.querySelector(target);
  const targetPosition = targetSection.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollAmount = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

// Easing function
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

//Typewritter Function
const text =document.querySelector(" .second-text");
        const textLoad =()=>{
            setTimeout( ()=> {
                text.textContent = " Full Stack Web Developer.";
            }, 0);
            setTimeout( ()=> {
                text.textContent = " Frontend Web Developer.";
            }, 4000);
            setTimeout( ()=> {
                text.textContent = " MERN Developer.";
            }, 8000);
            setTimeout( ()=> {
                text.textContent = " Python Developer.";
            }, 12000);
        }
        textLoad();
        setInterval(textLoad,16000);


// Download button
function downloadResume() {
  let downloadLink = document.createElement('a');
  downloadLink.href = 'path/to/your/resume.pdf'; // Replace with the actual path to your resume file
  downloadLink.download = 'resume.pdf'; // Replace with the desired filename for the downloaded file
  downloadLink.click();
}
let downloadButton = document.getElementById('button');
downloadButton.addEventListener('click', downloadResume);

function showPopup() {
  alert("Thank you for your message! We will get back to you soon.");
}