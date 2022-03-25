export default function initAnimateScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowScreen = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const SectionVisible = sectionTop - windowScreen < 0;
      if (SectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
