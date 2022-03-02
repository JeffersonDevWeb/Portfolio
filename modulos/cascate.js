export default function cascate() {
  function rain() {
    const amount = 5;
    const foot = document.querySelector('.final');
    let i = 0;

    while (i < amount) {
      const drop = document.createElement('i');

      const delay = Math.random() * -40;
      const duration = Math.random * 5;

      drop.style.animationDelay = `${delay}s`;
      drop.style.animationDuration = `${duration}s`;

      foot.appendChild(drop);
      // eslint-disable-next-line no-plusplus
      i++;
    }
  }

  rain();
}
