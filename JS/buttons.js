const welcome = document.getElementById("welcome");
          const about = document.getElementById("aboutus");
          const events = document.getElementById("events");
          const comp = document.getElementById("competitive");
          welcome.addEventListener("click", function (e) {
            window.open("index.html", "_self");
          });
          about.addEventListener("click", function (e) {
            window.open("aboutus.html", "_self");
          });
          events.addEventListener("click", function (e) {
            window.open("events.html", "_self");
          });
          comp.addEventListener("click", function (e) {
            window.open("competitive.html", "_self");
          });
