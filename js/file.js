//  function openmenu() {
//      document.getElementById("collapsibleNavbar").style.left = "0";
//  }

//  function closemenu() {
//      document.getElementById("collapsibleNavbar").style.left = "-260px";
//  }
//  const box = document.getElementById("box");



//   const scrollElements = document.querySelectorAll(".scroll-animate");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       const animationClass = entry.target.dataset.animate;

//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate__animated", animationClass);
//       }
//     });
//   }, {
//     threshold: 0.3
//   });

//  .;


  // Jab page scroll ho
  window.onscroll = function () {
     const btn = document.getElementById("airo");


  // Button click par top le jao
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


    if (document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  window.onload = function () {
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          'animate__animated',
          'animate__slideInUp'
        );
        entry.target.style.opacity = 1;
       
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });


  }
// navbar button toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




  
  