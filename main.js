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


    // --------------------back--to--tap-----------
     const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100');
    }
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