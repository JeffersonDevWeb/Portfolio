export default function fly() {
  const proj = document.querySelector(".proj");
  if (proj.classList.contains("ativo")) {
    const text = document.querySelector(".fly");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const animation = anime.timeline({
      targets: ".fly span",
      easing: "easeInOutExpo",
      loop: !1,
    });
    animation
      .add({
        rotate: () => anime.random(-360, 360),
        translateX: () => anime.random(-500, 500),
        translateY: () => anime.random(-500, 500),
        duration: 1000,
        delay: anime.stagger(20),
      })
      .add({
        rotate: 0,
        translateX: 0,
        translateY: 0,
        duration: 5000,
        delay: anime.stagger(20),
      });
  }
}
