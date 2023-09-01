const track = document.getElementById("track"); 

window.onmousedown = (e) => {
  console.log("hello world");
  track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;

  const percentage = (mouseDelta / (window.innerWidth / 2)) * -100;
  const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  if (nextPercentage > 0) nextPercentage = 0;
  else if (nextPercentage < -90) nextPercentage = -90;

  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -35%)`;
  for (const profile of track.getElementsByClassName("profile1")) {
    profile.style.objectPosition = `${nextPercentage * 3 + 50}% 50%`;
  }
  for (const profile of track.getElementsByClassName("profile2")) {
    profile.style.objectPosition = `${nextPercentage * 3 + 100}% 50%`;
  }
  for (const profile of track.getElementsByClassName("profile3")) {
    profile.style.objectPosition = `${nextPercentage * 3 + 160}% 50%`;
  }
  for (const profile of track.getElementsByClassName("profile4")) {
    profile.style.objectPosition = `${nextPercentage * 3 + 225}% 50%`;
  }
  for (const profile of track.getElementsByClassName("profile5")) {
    profile.style.objectPosition = `${nextPercentage * 3+ 300}% 50%`;
  }
  for (const profile of track.getElementsByClassName("profile6")) {
    profile.style.objectPosition = `${nextPercentage * 3 + 315}% 50%`;
  }
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};
