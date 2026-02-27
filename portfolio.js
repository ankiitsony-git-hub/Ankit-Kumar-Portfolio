document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


const sections = document.querySelectorAll("section, .projects, footer");
const navLinks = document.querySelectorAll(".options a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


const revealElements = document.querySelectorAll(
  ".homeinfo, .card, .projects, footer"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
  revealObserver.observe(el);
});


document.querySelectorAll(".p").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "0 2px 6px";
  }
});


console.log(
  "%cWelcome to Ankit's Portfolio 🚀",
  "color:#1e7add; font-size:16px; font-weight:bold;"
);