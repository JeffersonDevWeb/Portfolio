export default function background() {
  const light = document.querySelector(".light");
  const cont = document.querySelector(".grid-container");
  function mouselight(e) {
    const scrollY = document.documentElement.scrollTop;
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY + scrollY}px`;
    if (e.clientY + scrollY >= 2869) {
      light.classList.remove("lightout");
      light.classList.add("blackout");
    } else {
      light.classList.remove("blackout");
      light.classList.add("lightout");
    }
  }
  cont.addEventListener("mousemove", mouselight);
}
