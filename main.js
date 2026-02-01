const roles = ["AI Engineer", "Data Scientist", "Frontend Developer", "ML Engineer"];
    let index = 0, charIndex = 0;
    const typingText = document.getElementById("typing");

    function typeEffect() {
      if (charIndex < roles[index].length) {
        typingText.innerHTML += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(() => {
          typingText.innerHTML = "";
          charIndex = 0;
          index = (index + 1) % roles.length;
          typeEffect();
        }, 1000);
      }
    }
    typeEffect();

    //-------------- mobile menu toggle----------------------------
   const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // toggle visibility
  });


  


//   ----------form--submiton-----msd-----------------------------
 const form = document.getElementById("contactForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    result.textContent = "Sending...";
    
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      result.textContent = "Message sent successfully! Thank you 🙂";
      result.classList.remove("text-red-400");
      result.classList.add("text-cyan-400");
      form.reset();
    } else {
      result.textContent = "Oops! Something went wrong. Please try again.";
      result.classList.remove("text-cyan-400");
      result.classList.add("text-red-400");
    }
  });



// project scroll 
  
  let currentIndex = 0;
  const slides = document.getElementById("projectSlides");
  const totalSlides = slides.children.length;

  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

