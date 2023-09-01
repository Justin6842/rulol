const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) entry.target.classList.add('show');
      //entry.target.classList.toggle('show', entry.isIntersecting);
   });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));