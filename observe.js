window.addEventListener("load", observe1);

function observe1() {
  const sections = document.querySelectorAll(".florbers");
  const options = {
    threshold: [0.1, 0.5],
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.intersectionRatio >= 0.5) {
      } else {
        entry.target.style.backgroundColor = "red";
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
}
