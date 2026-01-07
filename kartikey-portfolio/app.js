const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const navLinks = document.querySelectorAll(".nav-links a");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");

    // Toggle icon
    if (sidebar.classList.contains("active")) {
      menuBtn.classList.remove("fa-bars");
      menuBtn.classList.add("fa-xmark");
    } else {
      menuBtn.classList.remove("fa-xmark");
      menuBtn.classList.add("fa-bars");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Close sidebar
      sidebar.classList.remove("active");
      menuBtn.classList.remove("fa-xmark");
      menuBtn.classList.add("fa-bars");
    });
  });
  
  const words = [
      "Frontend Developer",
      "Web Developer",
      "Figma to HTML"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingEl = document.getElementById("typing");

    function typingEffect() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        typingEl.textContent = currentWord.slice(0, charIndex++);
        if (charIndex > currentWord.length) {
          isDeleting = true;
          setTimeout(() => {}, 1200);
        }
      } else {
        typingEl.textContent = currentWord.slice(0, charIndex--);
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(typingEffect, isDeleting ? 60 : 120);
    }

    typingEffect();
	// SKILLS-BAR
    const skillsSection = document.getElementById("skil");
  const fills = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        fills.forEach(fill => {
          fill.style.width = fill.dataset.width + "%";
        });

        // Stop observing so animation runs only once
        observer.unobserve(skillsSection);
      }
    },
    {
      threshold: 0.4
    }
  );

  observer.observe(skillsSection);
  
   //CONTACT 
    const form = document.querySelector(".contact-form");
  const successMsg = document.querySelector(".form-success");

  form.addEventListener("submit", function () {
    setTimeout(() => {
      form.reset();
      successMsg.style.display = "block";
    }, 500);
  });